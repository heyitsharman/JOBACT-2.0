import React, { useEffect, useRef, useState } from "react";
import "./Jobs.css";

function Jobs() {
  const jobListRef = useRef(null);
  const filterRef = useRef(null);
  const clearButtonRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  let arr = [];

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        renderJobs(data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const renderJobs = (jobData) => {
    const main = jobListRef.current;
    main.innerHTML = "";

    jobData.forEach((job) => {
      const container = document.createElement("div");
      container.classList.add("container");
      container.innerHTML = `
        <img src="${job.logo}" alt="logo" />
        <div class="head">
          <div class="wrapper">
            <div class="top">
              <h2>${job.company}</h2>
              <div class="stat"></div>
            </div>
            <a href="#">${job.position}</a>
            <ul class="availability">
              <li>${job.postedAt}</li>
              <li>${job.contract}</li>
              <li>${job.location}</li>
            </ul>
          </div>
          <hr />
          <div class="tags"></div>
        </div>
      `;

      if (job.new) {
        const span = document.createElement("span");
        span.classList.add("new");
        span.textContent = "New!";
        container.querySelector(".stat").append(span);
      }

      if (job.featured) {
        container.classList.add("featured");
        const span = document.createElement("span");
        span.classList.add("feature");
        span.textContent = "Featured";
        container.querySelector(".stat").append(span);
      }

      const addButton = (text, type) => {
        const btn = document.createElement("button");
        btn.dataset.type = type;
        btn.textContent = text;
        container.querySelector(".tags").appendChild(btn);
        btn.addEventListener("click", () => handleFilter(type));
      };

      addButton(job.role, job.role);
      addButton(job.level, job.level);
      job.languages.forEach((lang) => addButton(lang, lang));
      job.tools.forEach((tool) => addButton(tool, tool));

      main.appendChild(container);
    });
  };

  const handleFilter = (type) => {
    if (!arr.includes(type)) {
      arr.push(type);
      addFilter(type);
    }
    updateContainer();
  };

  const clearFilters = () => {
    arr = [];
    filterRef.current.innerHTML = "";
    const containers = jobListRef.current.querySelectorAll(".container");
    containers.forEach((container) => container.classList.remove("remove"));
    filterRef.current.closest(".filter").style.display = "none";
  };

  const addFilter = (type) => {
    const filter = filterRef.current;
    const filterItem = document.createElement("div");
    filterItem.classList.add("span");
    filterItem.innerHTML = `
      <p>${type}</p>
      <button aria-label="remove button">
        <img src="assets/icon-remove.svg" alt="remove" />
      </button>
    `;
    filter.appendChild(filterItem);
    filter.closest(".filter").style.display = "flex";

    filterItem.querySelector("button").addEventListener("click", () => {
      arr.splice(arr.indexOf(type), 1);
      filterItem.remove();
      updateContainer();
      if (filter.innerHTML === "") {
        filter.closest(".filter").style.display = "none";
      }
    });
  };

  const updateContainer = () => {
    const containers = jobListRef.current.querySelectorAll(".container");
    containers.forEach((container) => {
      const buttons = container.querySelectorAll("button");
      let check = [];
      buttons.forEach((button) => check.push(button.dataset.type));

      let include = arr.every((filterType) => check.includes(filterType));

      if (include) {
        container.classList.remove("remove");
      } else {
        container.classList.add("remove");
      }
    });
  };

  return (
    <main>
      <div className="filter">
        <div className="filter-wrapper">
          <div className="filter-sub" ref={filterRef}></div>
        </div>
        <button ref={clearButtonRef}  onClick={clearFilters}>Clear</button>
      </div>
      <div className="job-list" ref={jobListRef}></div>
    </main>
  );
}

export default Jobs;
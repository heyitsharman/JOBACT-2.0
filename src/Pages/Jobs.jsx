import React, { useEffect, useRef } from "react";
import "./Jobs.css";

const jobData = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./assets/bajaj.jpg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./assets/Oracle-logo.jpg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./assets/hdfc.png",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./assets/google1.png",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./assets/loop.png",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./assets/microsoft-logo.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./assets/nike.png",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./assets/wiprologo.png",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Infosys",
    "logo": "./assets/info.png",
    "new": false,
    "featured": false,
    "position": "Full stack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "Ebay",
    "logo": "./assets/ebay.png",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];

function Jobs() {
  const jobListRef = useRef(null); // Reference for job list container
  const filterRef = useRef(null);   // Reference for filter container
  const clearButtonRef = useRef(null); // Reference for clear button
  let arr = [];

  useEffect(() => {
    const main = jobListRef.current;
    const filter = filterRef.current;
    const clear = clearButtonRef.current;

    // Dynamically render job listings on component mount
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

    clear.addEventListener("click", clearFilters);

    return () => {
      clear.removeEventListener("click", clearFilters);
    };
  }, []);

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
        <button ref={clearButtonRef}>Clear</button>
      </div>
      <div className="job-list" ref={jobListRef}></div>
    </main>
  );
}

export default Jobs;

let filters = [];

document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobListRef");
  const filterContainer = document.getElementById("filterRef");
  const filterBox = document.querySelector(".filter");
  const clearButton = document.getElementById("clearButton");

  jobList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      if (!filters.includes(type)) {
        filters.push(type);
        addFilterTag(type);
        updateJobs();
      }
    });
  });

  clearButton.addEventListener("click", () => {
    filters = [];
    filterContainer.innerHTML = "";
    filterBox.style.display = "none";
    updateJobs();
  });

  function addFilterTag(type) {
    const span = document.createElement("div");
    span.classList.add("span");
    span.innerHTML = `<p>${type}</p><button><img src="/assets/icon-remove.svg" alt="remove"/></button>`;
    filterContainer.appendChild(span);
    filterBox.style.display = "flex";

    span.querySelector("button").addEventListener("click", () => {
      filters = filters.filter(f => f !== type);
      span.remove();
      if (filters.length === 0) filterBox.style.display = "none";
      updateJobs();
    });
  }

  function updateJobs() {
    jobList.querySelectorAll(".container").forEach(container => {
      const tags = Array.from(container.querySelectorAll("button")).map(btn => btn.dataset.type);
      const visible = filters.every(f => tags.includes(f));
      container.style.display = visible ? "block" : "none";
    });
  }
});

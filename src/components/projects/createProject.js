/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import todoListIMG from "/src/assets/images/screenshots/todo-list.png";
import weatherAppIMG from "/src/assets/images/screenshots/weather-app.png";
import calculatorIMG from "/src/assets/images/screenshots/calculator.png";
import etchASkatchIMG from "/src/assets/images/screenshots/etch-a-skatch.png";
import adminDashboardIMG from "/src/assets/images/screenshots/admin-dashboard.png";
import liveImg from "/src/assets/images/links/external-link.png";

const imageMap = {
  "todo-list": todoListIMG,
  "weather-app": weatherAppIMG,
  calculator: calculatorIMG,
  "etch-a-sketch": etchASkatchIMG,
  "admin-dashboard": adminDashboardIMG,
};

export default function createProjects() {
  const projects = [
    "todo-list",
    "weather-app",
    "calculator",
    "etch-a-sketch",
    "admin-dashboard",
  ];

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((el) => {
    const project = document.createElement("div");
    project.classList.add("project");
    projectsContainer.appendChild(project);

    const image = new Image();
    image.classList.add("screenshot");
    image.src = imageMap[el];
    project.appendChild(image);

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    project.appendChild(projectInfo);

    const parsedName = el
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace(/-/g, " ");

    const name = document.createElement("h2");
    name.classList.add("name");
    name.textContent = parsedName;
    projectInfo.appendChild(name);

    const links = document.createElement("div");
    links.classList.add("links");
    projectInfo.appendChild(links);

    const ghLink = document.createElement("a");
    ghLink.href = `https://github.com/saba-bar95/${el}`;
    ghLink.target = "_blank";
    links.appendChild(ghLink);

    const github = new Image();
    github.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    ghLink.appendChild(github);

    const liveLink = document.createElement("a");
    liveLink.href = `https://saba-bar95.github.io/${el}/`;
    liveLink.target = "_blank";
    links.appendChild(liveLink);

    const live = new Image();
    live.src = liveImg;
    liveLink.appendChild(live);
  });
}

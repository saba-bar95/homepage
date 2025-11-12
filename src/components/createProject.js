/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import cvApplicationImg from "/src/assets/images/screenshots/cv-application.png";
import todoListIMG from "/src/assets/images/screenshots/todo-list.png";
import weatherAppIMG from "/src/assets/images/screenshots/weather-app.png";
import calculatorIMG from "/src/assets/images/screenshots/calculator.png";
import etchASkatchIMG from "/src/assets/images/screenshots/etch-a-skatch.png";
import adminDashboardIMG from "/src/assets/images/screenshots/admin-dashboard.png";
import liveImg from "/src/assets/images/links/external-link.png";
import memoryCardImg from "/src/assets/images/screenshots/memory-card.png";
import censusImg from "/src/assets/images/screenshots/census-2024.png";
import shoppingCartImg from "/src/assets/images/screenshots/shopping-cart.png";
import energyStatisticsPortalImg from "/src/assets/images/screenshots/energy-statistics-portal.png";
import environmentalStatisticsPortal from "/src/assets/images/screenshots/environmental-statistics-portal.png";
import libraryImg from "/src/assets/images/screenshots/library.png";

const imageMap = {
  "environmental-statistics-portal": environmentalStatisticsPortal,
  "enery-statistics-portal": energyStatisticsPortalImg,
  "census-2024": censusImg,
  "shopping-cart": shoppingCartImg,
  "CV-application": cvApplicationImg,
  "todo-list": todoListIMG,
  "memory-card": memoryCardImg,
  "weather-app": weatherAppIMG,
  "admin-dashboard": adminDashboardIMG,
  "etch-a-sketch": etchASkatchIMG,
  calculator: calculatorIMG,
  library: libraryImg,
};

const pageLinks = {
  "environmental-statistics-portal":
    "https://environment-statistics-portal.vercel.app",
  "enery-statistics-portal": "https://energy-portal-seven.vercel.app/",
  "census-2024": "https://census-2024.vercel.app/",
  "shopping-cart": "https://shopping-cart-three-ivory.vercel.app/",
  "CV-application": "https://cv-app-pi.vercel.app/",
  "memory-card": "https://memory-card-alpha-bay.vercel.app/",
};

const projects = [
  "environmental-statistics-portal",
  "enery-statistics-portal",
  "census-2024",
  "shopping-cart",
  "CV-application",
  "todo-list",
  "memory-card",
  "weather-app",
  "library",
  "admin-dashboard",
  "calculator",
  "etch-a-sketch",
];

export default function createProjects() {
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

    switch (el) {
      case "environmental-statistics-portal":
        ghLink.href = "https://github.com/saba-bar95/environment";
        break;
      case "enery-statistics-portal":
        ghLink.href = "https://github.com/saba-bar95/energy-portal";
        break;
      case "CV-application":
        ghLink.href = "https://github.com/saba-bar95/cv-app";
        break;
      default:
        ghLink.href = `https://github.com/saba-bar95/${el}`;
    }

    ghLink.target = "_blank";
    links.appendChild(ghLink);

    const github = new Image();
    github.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    ghLink.appendChild(github);

    const liveLink = document.createElement("a");
    liveLink.href = pageLinks[el] || `https://saba-bar95.github.io/${el}/`;
    liveLink.target = "_blank";
    links.appendChild(liveLink);

    const live = new Image();
    live.src = liveImg;
    liveLink.appendChild(live);
  });
}

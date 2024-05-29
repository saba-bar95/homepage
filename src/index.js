import "./index.scss";
import createProjects from "./components/createProject";

createProjects();

const landmarks = document.querySelectorAll(".landmark");
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

landmarks.forEach((item) => {
  observer.observe(item);
});

projects.forEach((item) => {
  observer.observe(item);
});

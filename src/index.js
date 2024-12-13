import "./index.scss";
import createProjects from "./components/createProject";

createProjects();

const landmarks = document.querySelectorAll(".landmark");
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 500;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);
      observer.unobserve(entry.target);
    }
  });
});

landmarks.forEach((item) => {
  observer.observe(item);
});

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 300;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);

      projectObserver.unobserve(entry.target);
    }
  });
});

projects.forEach((item) => {
  projectObserver.observe(item);
});

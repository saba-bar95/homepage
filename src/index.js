import "./index.scss";
import createProjects from "./components/createProject";

createProjects();

const animateIfVisible = () => {
  // Only run if tab was visible at page load

  const landmarks = document.querySelectorAll(".landmark");
  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = i * 500;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  });

  const projectObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = i * 200;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  });

  landmarks.forEach((item) => observer.observe(item));
  projects.forEach((item) => projectObserver.observe(item));
};

window.addEventListener("load", animateIfVisible);

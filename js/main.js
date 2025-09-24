window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".hidden");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".left-an");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".right-an");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

let scrollNow = window.scrollY;
let navbar = document.querySelector("header");

window.onscroll = function () {
  if (window.scrollY > scrollNow) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }
  scrollNow = window.scrollY;
};

const light = document.querySelector(".fa-circle-half-stroke");
const path = document.querySelector("header svg path");
light.onclick = function () {
  const Dark =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--mainColor"
    ) === "#171717";

  if (Dark) {
    document.documentElement.style.setProperty("--mainColor", "#ffffff");
    document.documentElement.style.setProperty("--secondrayColor", "#171717");
    document.querySelector("header").style.boxShadow =
      "1px 4px 38px -4px rgb(255 255 255 / 20%)";
    path.setAttribute("fill", "#ffffff");
  } else {
    document.documentElement.style.setProperty("--mainColor", "#171717");
    document.documentElement.style.setProperty("--secondrayColor", "#ffffff");
    document.querySelector("header").style.boxShadow =
      "1px 4px 38px -4px #00000031";
    path.setAttribute("fill", "#171717");
  }
};

const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");
const fa = document.querySelector(".fa-bars");

fa.onclick = function () {
  nav.style.display = "block";
  ul.style.display = "block";
};

const fa2 = document.querySelector(".fa-xmark");

fa2.onclick = function () {
  ul.style.display = "none";
};

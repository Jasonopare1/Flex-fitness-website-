'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {

    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }

  }
}

reveal();
addEventOnElem(window, "scroll", reveal);


document.getElementById('btn btn-secondary').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('btn btn-secondary', '_blank');
});

document.getElementById('btn btn-primary').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('btn btn-primary', '_blank');
});


document.addEventListener('DOMContentLoaded', function() {
    const yearDropdown = document.getElementById('university_year');
    
    // Add a placeholder
    const placeholderOption = document.createElement('option');
    placeholderOption.value = "";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.textContent = "Select your university year";
    yearDropdown.appendChild(placeholderOption);

    // Add the actual year options
    const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"]; // Add more if necessary
    for (const year of years) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearDropdown.appendChild(option);
    }

    // Set the size attribute based on the number of options
    yearDropdown.size = yearDropdown.childElementCount;
});

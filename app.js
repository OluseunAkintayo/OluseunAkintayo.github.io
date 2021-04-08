let menuBtn = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".navLinks");
let link = document.getElementsByClassName("navLink");

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("show-navLinks");
});

Array.from(link).forEach(linkItem => {
    linkItem.addEventListener('click', (e) => {
        navLinks.classList.remove("show-navLinks");
    })
});

//Michaelson
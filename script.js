// Created by monkey_K1n9
// This app implements a smooth scrolling. Two methods can be used, one in the hmtl file at the html style and here in the JS file

const links = document.querySelectorAll(".nav-list li a")

for (link of links) {
    link.addEventListener("click", smoothScroll)
}

function smoothScroll (e) {
    e.preventDefault()

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
    hideMenu()
}

// Responsive mobile menu
const menu = document.querySelector(".nav-list")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")

hamburger.addEventListener("click", showMenu)
close.addEventListener("click", hideMenu)

function showMenu (e) {
    e.preventDefault()
    hamburger.style.display = "none"
    close.style.transform = "translateY(0)"
    menu.style.transform = "translateY(0)"
}

function hideMenu (e) {
    close.style.transform = "translateY(-20rem)"
    hamburger.style.display = "block"
    menu.style.transform = "translateY(-200%)"
}
//get elements
let ul = document.querySelector(".ul")
let btn = document.querySelector(".toggle")

// the menu
btn.addEventListener("click", function () {
    btn.classList.toggle("btn")

    ul.classList.toggle("show")
})

//scroll button
let scrollBtn = document.querySelector(".scroll")
//header
let header = document.querySelector("header")

//when to appear
window.onscroll = function () {
    if (window.scrollY >= 600) {
        scrollBtn.style.display = "block"
    }
    else {
        scrollBtn.style.display = "none"
    }
    //header to appear and be fixed
    if (window.scrollY >= 400) {
        header.style.cssText = "position:fixed;background-color:white;z-index:10;width:100%;"
    }
    if (window.scrollY === 0) {
        header.style.cssText = "position:relative;background-color:transparent;z-index:10;width:100%;"
    }
}

//function when clicked
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

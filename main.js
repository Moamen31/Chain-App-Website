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

//when to appear
window.onscroll = function () {
    if (window.scrollY >= 600) {
        scrollBtn.style.display = "block"
    }
    else {
        scrollBtn.style.display = "none"
    }
}

//function when clicked
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
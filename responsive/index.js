const hamburger = document.querySelector(".hamburger");
const navmenu= document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
});
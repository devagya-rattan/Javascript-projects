const heart = document.querySelector(".heart"); 
const heartContainer = document.querySelector(".heart-container")
heartContainer.addEventListener("dblclick",()=>
    heart.classList.toggle("active")
);
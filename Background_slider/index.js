const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
// let activeslide  = 0;
let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

//   setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

//   setBgToBody()
  setActiveSlide()
})

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
  
    slides[activeSlide].classList.add('active')
  }
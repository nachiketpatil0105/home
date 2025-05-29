// NAVBAR

function toggleMenu() {
  const navLinks = document.querySelector('nav .nav-links')
  navLinks.classList.toggle('show')
}

// SCROLLBAR

window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav')
  if (window.scrollY > 24) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
})

// Scroll-based clockwise rotation for all images

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const img6 = document.querySelector('.img6')
const img7 = document.querySelector('.img7')
const baseRotations = [-10, 8, -5, 12, -8, 6, -6]

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset
  const rotateAmount = scrollY * 2

  img1.style.transform = `rotate(${baseRotations[0] + rotateAmount}deg)`
  img2.style.transform = `rotate(${baseRotations[1] + rotateAmount}deg)`
  img3.style.transform = `rotate(${baseRotations[2] + rotateAmount}deg)`
  img4.style.transform = `rotate(${baseRotations[3] + rotateAmount}deg)`
  img5.style.transform = `rotate(${baseRotations[4] + rotateAmount}deg)`
  img6.style.transform = `rotate(${baseRotations[5] + rotateAmount}deg)`
  img7.style.transform = `rotate(${baseRotations[6] + rotateAmount}deg)`
})

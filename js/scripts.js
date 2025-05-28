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

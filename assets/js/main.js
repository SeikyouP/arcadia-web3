//  Declare Variables
let header = document.querySelector('.header')
let menuToggle = document.querySelector('.header_button')
let menuLinks = document.querySelectorAll('.header_menu-link')
let topButton = document.querySelector('.top-button')

// Open / Close (Toggle) the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active')
  header.classList.toggle('mobile-header_active')
})

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menuToggle.classList.remove('is-active')
    header.classList.remove('mobile-header_active')
  })
}

// Listen for Scroll Event
window.addEventListener('scroll', function () {
  // Check where (y-position) the top button should be visible
  if (window.pageYOffset >= 300) {
    topButton.classList.add('top-button--active')
  }

  // Otherwise, check which Y-position the top button should be invisible
  else if (window.pageYOffset < 300) {
    topButton.classList.remove('top-button--active')
  }
})

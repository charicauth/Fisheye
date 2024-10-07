/* eslint-disable no-unused-vars */

// Get the form element and the button
const contactForm = document.getElementById('contact_modal')

// Add an event listener to the form submission
contactForm.addEventListener('submit', function (event) {
  // Prevent the default form submission (which reloads the page)
  event.preventDefault()

  // Gather the form values
  const prenom = document.getElementById('prenom').value
  const nom = document.getElementById('nom').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Log the form values
  console.log('Prénom:', prenom)
  console.log('Nom:', nom)
  console.log('Email:', email)
  console.log('Message:', message)
})

// Displays the contact form
function displayModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')

  // eslint-disable-next-line no-unused-vars
  const lastFocusedElement = document.activeElement // Store the element that triggered the modal

  modal.style.display = 'block'
  main.style.opacity = 0.5
  island.style.opacity = 0.8
  // eslint-disable-next-line no-undef
  trapFocus(modal)
}
// Closes the contact form
function closeModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')

  modal.style.display = 'none'
  main.style.opacity = 1
  island.style.opacity = 1

  // eslint-disable-next-line no-undef
  releaseFocus() // Remove the focus trap

  // Return focus to the element that triggered the modal
  // eslint-disable-next-line no-undef
  if (lastFocusedElement) {
    // eslint-disable-next-line no-undef
    lastFocusedElement.focus()
  }
}

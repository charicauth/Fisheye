/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function displayModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')

  lastFocusedElement = document.activeElement // Store the element that triggered the modal

  modal.style.display = 'block'
  main.style.opacity = 0.5
  island.style.opacity = 0.8
  trapFocus(modal)
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')

  modal.style.display = 'none'
  main.style.opacity = 1
  island.style.opacity = 1

  releaseFocus() // Remove the focus trap

  // Return focus to the element that triggered the modal
  if (lastFocusedElement) {
    lastFocusedElement.focus()
  }
}

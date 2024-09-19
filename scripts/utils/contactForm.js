/* eslint-disable no-unused-vars */
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

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let trappedContainer = null // Keep track of the container that is currently trapping focus
const lastFocusedElement = null // To store the element that triggered the modal

function trapFocus (container = document) {
  trappedContainer = container // Set the container to trap focus within
  const focusableElements = container.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])')
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  container.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      if (event.shiftKey) { // Shift + Tab (backward tabbing)
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else { // Tab (forward tabbing)
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Close the modal with Escape key
    if (event.key === 'Escape') {
      closeModal()
    }
  })

  // Immediately focus the first focusable element in the modal
  if (firstElement) {
    firstElement.focus()
  }
}

function releaseFocus () {
  trappedContainer = null // Clear the trapped container
}

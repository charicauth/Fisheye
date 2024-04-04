// eslint-disable-next-line no-unused-vars
function displayModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')
  modal.style.display = 'block'
  main.style.opacity = 0.5
  island.style.opacity = 0.8
}

// eslint-disable-next-line no-unused-vars
function closeModal () {
  const modal = document.getElementById('contact_modal')
  const main = document.getElementById('main')
  const island = document.getElementById('island')
  modal.style.display = 'none'
  main.style.opacity = 1
  island.style.opacity = 1
}

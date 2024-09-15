document.getElementById('work-filter').addEventListener('change', async function () {
  const filter = this.value
  const photographerWork = document.getElementById('work')

  // Ensure data is loaded before using it
  if (!window.photographer) return

  // Wait for the work data to be fetched if necessary
  const work = await window.photographer.work

  photographerWork.innerHTML = ''

  // Get the new sorted elements
  const sortedWorkElements = window.photographer.displayWork(work, filter)

  // Append the new content (assuming `sortedWorkElements` is an array of elements)
  photographerWork.appendChild(sortedWorkElements)
})

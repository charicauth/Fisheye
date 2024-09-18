const photographerLikes = document.getElementById('likes')

// Create heart icon and make it accessible
const heartIcon = document.createElement('i')
heartIcon.setAttribute('class', 'fa-solid fa-heart')
heartIcon.setAttribute('role', 'button') // Add role for screen readers
heartIcon.setAttribute('aria-label', 'Like this') // Accessible label
heartIcon.setAttribute('aria-pressed', 'false') // Indicate it is not liked
heartIcon.setAttribute('tabindex', '0') // Make it keyboard accessible
heartIcon.addEventListener('click', like) // Attach click event listener
heartIcon.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    like(e)
  }
})

// Add aria-live to announce updates
photographerLikes.setAttribute('aria-live', 'polite')

// eslint-disable-next-line no-unused-vars
function like (event) {
  const heart = event.currentTarget
  const heartParent = heart.parentElement
  const likesCountElement = heartParent.querySelector('.likes-count')
  const nbOfHearts = parseInt(likesCountElement.textContent)

  // Toggle the like/unlike state
  if (heartParent.dataset.liked === 'true') {
    likesUpdate('dec')
    likesCountElement.textContent = nbOfHearts - 1
    heartParent.dataset.liked = 'false'
    heart.focus()
  } else if (heartParent.dataset.liked === 'false') {
    likesUpdate('inc')
    likesCountElement.textContent = nbOfHearts + 1
    heartParent.dataset.liked = 'true'
    heart.focus() // Set focus to the new heart
  }
}

// Update the total likes count
function likesUpdate (op) {
  const icon = document.createElement('i')
  icon.setAttribute('class', 'fa-solid fa-heart')

  if (op === 'inc') {
    photographerLikes.textContent = parseInt(photographerLikes.textContent) + 1
    photographerLikes.appendChild(icon)
  }
  if (op === 'dec') {
    photographerLikes.textContent = parseInt(photographerLikes.textContent) - 1
    photographerLikes.appendChild(icon)
  }
}

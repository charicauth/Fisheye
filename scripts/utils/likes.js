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
  const nbOfHearts = parseInt(heartParent.textContent)

  // Toggle the like/unlike state
  if (heartParent.dataset.liked === 'true') {
    likesUpdate('dec')
    heartParent.textContent = nbOfHearts - 1
    const newHeart = cloneHeart(heart) // Create cloned heart
    heartParent.appendChild(newHeart)
    heartParent.dataset.liked = 'false'
    newHeart.setAttribute('aria-pressed', 'false')
    newHeart.setAttribute('aria-label', 'Like this')
    newHeart.focus() // Set focus to the new heart
  } else if (heartParent.dataset.liked === 'false') {
    likesUpdate('inc')
    heartParent.textContent = nbOfHearts + 1
    const newHeart = cloneHeart(heart) // Create cloned heart
    heartParent.appendChild(newHeart)
    heartParent.dataset.liked = 'true'
    newHeart.setAttribute('aria-pressed', 'true')
    newHeart.setAttribute('aria-label', 'Unlike this')
    newHeart.focus() // Set focus to the new heart
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

// Helper function to clone the heart icon and retain event listeners
function cloneHeart (heart) {
  const clonedHeart = heart.cloneNode(true)
  clonedHeart.addEventListener('click', like)
  clonedHeart.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      like(e)
    }
  })
  return clonedHeart
}

const photographerLikes = document.getElementById('likes')

const heartIcon = document.createElement('i')
heartIcon.setAttribute('class', 'fa-solid fa-heart')
heartIcon.setAttribute('onclick', 'like(event)')

// eslint-disable-next-line no-unused-vars
function like (event) {
  const heart = event.currentTarget
  const heartParent = heart.parentElement

  const nbOfHearts = parseInt(heartParent.textContent)

  if (heartParent.dataset.liked === 'true') {
    likesUpdate('dec')
    heartParent.textContent = nbOfHearts - 1
    heartParent.appendChild(heartIcon.cloneNode(true))
    heartParent.dataset.liked = 'false'
  } else if (heartParent.dataset.liked === 'false') {
    likesUpdate('inc')
    heartParent.textContent = nbOfHearts + 1
    heartParent.appendChild(heartIcon.cloneNode(true))
    heartParent.dataset.liked = 'true'
  }
}

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

const closeUpView = document.getElementById('closeUpView')
const closeUpImg = document.getElementById('closeUpImg')
const closeUpVideo = document.getElementById('closeUpVideo')
const closeUpImgTitle = document.getElementById('closeUpImgTitle')

const imgs = document.getElementsByClassName('photo-container')
let index = 0

function checkDummy () {
  const check = document.getElementById('dummy-child')
  if (check) {
    return true
  }
  return false
}

function displayImg (index) {
  const elem = imgs[index].children[0]
  const elemUrl = elem.dataset.url
  if (elem.dataset.category === 'video') {
    closeUpImg.style.display = 'none'
    closeUpVideo.style.display = 'block'
    closeUpVideo.setAttribute('src', elem.dataset.url)
    closeUpVideo.setAttribute('controls', '')
  }
  if (elem.dataset.category === 'picture') {
    closeUpVideo.style.display = 'none'
    closeUpImg.style.display = 'block'
    closeUpImg.setAttribute('src', elemUrl)
  }
}

// eslint-disable-next-line no-unused-vars
function closeDialog () {
  closeUpView.style.display = 'none'
}

// eslint-disable-next-line no-unused-vars
function openCloseUpView (event) {
  const elem = event.currentTarget
  const elemUrl = elem.dataset.url
  const elemParent = elem.parentNode
  const children = Array.from(elemParent.parentElement.children)
  index = children.indexOf(elemParent)

  closeUpView.style.display = 'flex'

  if (elem.dataset.category === 'video') {
    closeUpImg.style.display = 'none'
    closeUpVideo.style.display = 'block'
    closeUpVideo.setAttribute('src', elemUrl)
    closeUpVideo.setAttribute('controls', '')
  }
  if (elem.dataset.category === 'picture') {
    closeUpVideo.style.display = 'none'
    closeUpImg.style.display = 'block'
    closeUpImg.setAttribute('src', elemUrl)
  }
  closeUpImgTitle.textContent = elem.dataset.title
}

// eslint-disable-next-line no-unused-vars
function nextImg () {
  let max = imgs.length - 1

  index += 1
  if (checkDummy()) {
    max = imgs.length - 1
  }

  if (index >= max) {
    index = 0
  }

  displayImg(index)
}

// eslint-disable-next-line no-unused-vars
function previousImg () {
  let max = imgs.length - 1

  index -= 1
  if (checkDummy()) {
    max = imgs.length - 2
  }

  if (index < 0) {
    index = max
  }
  displayImg(index)
}

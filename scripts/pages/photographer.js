const urlParams = new URLSearchParams(window.location.search)

const profileName = urlParams.get('name')

// eslint-disable-next-line no-undef
window.photographer = new Photographer(profileName)

async function getPhotographerData () {
  const photographerProfile = await window.photographer.profile
  const photographerWork = await window.photographer.work

  const data = { profile: photographerProfile, work: photographerWork }

  return data
}

async function displayData (profile, work) {
  const photographerHeader = document.getElementById('photograph-header')
  const photographerWork = document.getElementById('work')
  const profileImg = document.getElementById('profile-picture')
  const nbOfLikes = document.getElementById('likes')
  const price = document.getElementById('price-tag')
  const modal = document.getElementById('modalPhotographerName')

  const profileInformations = window.photographer.displayProfile(profile)
  const photographWork = window.photographer.displayWork(work)

  photographerHeader.prepend(profileInformations)
  photographerWork.append(photographWork)
  profileImg.setAttribute('name', profile.name)
  profileImg.setAttribute('role', 'img') // Define it as an image for screen readers
  profileImg.setAttribute('aria-label', profile.name + "'s profile picture") // Add a descriptive label
  profileImg.setAttribute('alt', profile.name + "'s profile picture") // For additional accessibility support
  profileImg.style.backgroundImage = 'url(../assets/photographers/' + profile.portrait + ')'
  nbOfLikes.prepend(window.photographer.getTotalOfLikes(work))
  price.textContent = profile.price + ' €/ Jour '
  modal.textContent = profile.name
}

async function init () {
  // Récupère les datas des photographes
  const { profile, work } = await getPhotographerData()
  displayData(profile, work)
}

init()

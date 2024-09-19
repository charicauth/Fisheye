// eslint-disable-next-line no-unused-vars
function photographerTemplate (data) {
  const { name, portrait, price, tagline, city, country } = data

  const picture = `./assets/photographers/${portrait}`

  function getUserCardDOM () {
    const article = document.createElement('article')

    const imgContainer = document.createElement('div')
    const profileInfoContainer = document.createElement('div')
    const link = document.createElement('a')
    const h2 = document.createElement('h2')
    const location = document.createElement('h3')
    const photographerTagline = document.createElement('p')
    const photographerPrice = document.createElement('p')
    const img = document.createElement('img')

    h2.textContent = name
    location.textContent = city + ', ' + country
    photographerTagline.textContent = tagline
    photographerPrice.textContent = price + ' €/ Jour'

    profileInfoContainer.setAttribute('class', 'photographer-infos')
    link.setAttribute('href', './photographer.html?name=' + name)
    location.setAttribute('class', 'location')
    photographerTagline.setAttribute('class', 'photohrapher-tagline')
    photographerPrice.setAttribute('class', 'photographer-price')
    imgContainer.setAttribute('class', 'profile-picture-container')
    img.setAttribute('src', picture)
    img.setAttribute('class', 'profile-picture')
    img.setAttribute('alt', 'profile picture of' + name)

    profileInfoContainer.appendChild(location)
    profileInfoContainer.appendChild(photographerTagline)
    profileInfoContainer.appendChild(photographerPrice)
    imgContainer.appendChild(img)
    link.appendChild(imgContainer)
    link.appendChild(h2)
    link.appendChild(profileInfoContainer)
    article.appendChild(link)
    return (article)
  }
  return { name, picture, getUserCardDOM }
}

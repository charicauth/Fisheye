// eslint-disable-next-line no-unused-vars
class Photographer {
  constructor (name) {
    this.name = name

    this.profile = this.getProfile()
    this.work = this.getWork()
  }

  async getDataInformation (searchrequest) {
    try {
      // Update the path to '../data/photographers.json'
      const response = await fetch('../data/photographers.json')

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      const photographers = data.photographers

      const profile = photographers.find(photographer => photographer.name === this.name)

      if (profile) {
        const work = data.media.filter(media => media.photographerId === profile.id)

        if (searchrequest === 'photographerProfile') {
          return await profile
        } else if (searchrequest === 'photographerWork') {
          return await work
        }
      } else {
        console.log('Profile not found')
      }
    } catch (error) {
      console.error('Error fetching photographers:', error.message)
      return null
    }
  }

  async getProfile () {
    return this.getDataInformation('photographerProfile')
  }

  getWork () {
    return this.getDataInformation('photographerWork')
  }

  displayProfile (profile) {
    const name = document.createElement('h1')
    name.textContent = profile.name
    const location = document.createElement('h2')
    location.textContent = profile.city + ', ' + profile.country
    const tagline = document.createElement('p')
    tagline.textContent = profile.tagline
    const container = document.createElement('div')
    container.setAttribute('id', 'profile-info')
    container.setAttribute('class', 'profile-info')
    container.appendChild(name)
    container.appendChild(location)
    container.appendChild(tagline)

    return (container)
  }

  displayWork (work) {
    const sortedWork = this.sortByPopularity(work)

    const workContainer = document.createElement('div', { class: 'photo-container' })
    const workDummyChildNb = work.length % 3

    sortedWork.forEach(piece => {
      const container = document.createElement('div', { class: 'photo-container' })
      container.setAttribute('class', 'photo-container')
      container.setAttribute('data-date', piece.date)

      const author = this.name.split(' ')[0].replace('-', ' ')

      const title = document.createElement('h2')
      const likes = document.createElement('p')
      likes.setAttribute('data-liked', 'false')
      const heartIcon = document.createElement('i')
      heartIcon.setAttribute('class', 'fa-solid fa-heart')
      heartIcon.setAttribute('onclick', 'like(event)')

      title.textContent = piece.title
      likes.textContent = piece.likes

      likes.appendChild(heartIcon)
      container.appendChild(title)
      container.appendChild(likes)

      if (piece.video) {
        const imgPath = '/assets/images/' + author.replace(' ', '%20') + '/' + piece.video
        const video = document.createElement('video')
        video.setAttribute('onclick', 'openCloseUpView(event)')
        video.setAttribute('type', 'video/mp4')
        video.setAttribute('class', 'video')
        video.setAttribute('src', imgPath)
        video.setAttribute('type', 'video/mp4')
        video.setAttribute('data-url', imgPath)
        video.setAttribute('data-category', 'video')
        video.setAttribute('data-title', piece.title)
        container.prepend(video)
        workContainer.appendChild(container)
      }
      if (piece.image) {
        const imgPath = '/assets/images/' + author.replace(' ', '%20') + '/' + piece.image
        const photo = document.createElement('div')
        photo.setAttribute('onclick', 'openCloseUpView(event)')
        photo.setAttribute('class', 'photo')
        photo.setAttribute('data-url', imgPath)
        photo.setAttribute('data-category', 'picture')
        photo.setAttribute('data-title', piece.title)
        photo.style.backgroundImage = 'url(' + imgPath + ')'
        container.prepend(photo)
        workContainer.appendChild(container)
      }
    })

    if (workDummyChildNb === 2) {
      const workDummyChild = document.createElement('div')
      workDummyChild.setAttribute('class', 'photo-container')
      workDummyChild.setAttribute('id', 'dummy-child')
      workContainer.appendChild(workDummyChild)
    }

    return (workContainer)
  }

  getTotalOfLikes (work) {
    let totalOflikes = 0
    // eslint-disable-next-line no-return-assign
    work.forEach(piece => totalOflikes += piece.likes)
    return totalOflikes
  }

  sortByPopularity (work) {
    const workArray = Array.from(work)
    workArray.sort((a, b) => {
      return b.likes - a.likes
    })
    return workArray
  }
}

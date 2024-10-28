/* eslint-disable no-undef */
// Factory class to create media elements (image or video)
export default class MediaFactory {
  static createMediaElement (piece, author) {
    if (piece.image) {
      return MediaFactory.createImageElement(piece, author)
    } else if (piece.video) {
      return MediaFactory.createVideoElement(piece, author)
    }
    return null
  }

  static createImageElement (piece, author) {
    const imgPath = `../assets/images/${author.replace(' ', '%20')}/${piece.image}`
    const photo = document.createElement('div')
    const media = document.createElement('img')
    media.src = imgPath
    media.classList.add('media')
    photo.classList.add('photo')
    photo.setAttribute('onclick', 'openCloseUpView(event)')
    photo.setAttribute('data-url', imgPath)
    photo.setAttribute('data-category', 'picture')
    photo.setAttribute('data-title', piece.title)
    photo.append(media)
    // photo.style.backgroundImage = `url(${imgPath})`


    // Accessibility
    photo.setAttribute('role', 'img')
    photo.setAttribute('tabindex', '0')
    photo.setAttribute('aria-label', `Open image titled ${piece.title}`)
    photo.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        openCloseUpView(e)
      }
    })

    return photo
  }

  static createVideoElement (piece, author) {
    const videoPath = `../assets/images/${author.replace(' ', '%20')}/${piece.video}`
    const video = document.createElement('video')
    video.classList.add('video')
    video.setAttribute('onclick', 'openCloseUpView(event)')
    video.setAttribute('src', videoPath)
    video.setAttribute('type', 'video/mp4')
    video.setAttribute('data-url', videoPath)
    video.setAttribute('data-category', 'video')
    video.setAttribute('data-title', piece.title)

    // Accessibility
    video.setAttribute('role', 'button')
    video.setAttribute('tabindex', '0')
    video.setAttribute('aria-label', `Play video titled ${piece.title}`)
    video.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        openCloseUpView(e)
      }
    })

    return video
  }

  // static createImageElement(piece, author) {
  //   const imgPath = `../assets/images/${author.replace(' ', '%20')}/${piece.image}`;
  //   const photo = document.createElement('img');
  //   photo.classList.add('photo');
  //   photo.src = imgPath;
  //   photo.alt = `Open image titled ${piece.title}`;
  //   photo.setAttribute('data-url', imgPath);
  //   photo.setAttribute('data-category', 'picture');
  //   photo.setAttribute('data-title', piece.title);
    
  //   // Accessibility
  //   photo.setAttribute('role', 'img');
  //   photo.setAttribute('tabindex', '0');
  //   photo.setAttribute('aria-label', `Open image titled ${piece.title}`);
  //   photo.addEventListener('keydown', function(e) {
  //     if (e.key === 'Enter') {
  //       openCloseUpView(e);
  //     }
  //   });

  //   return photo;
  // }

  // static createVideoElement(piece, author) {
  //   const videoPath = `../assets/images/${author.replace(' ', '%20')}/${piece.video}`;
  //   const video = document.createElement('video');
  //   video.classList.add('video');
  //   video.src = videoPath;
  //   video.setAttribute('controls', ''); // Adding controls to allow play/pause
  //   video.setAttribute('data-url', videoPath);
  //   video.setAttribute('data-category', 'video');
  //   video.setAttribute('data-title', piece.title);

  //   // Accessibility
  //   video.setAttribute('role', 'button');
  //   video.setAttribute('tabindex', '0');
  //   video.setAttribute('aria-label', `Play video titled ${piece.title}`);
  //   video.addEventListener('keydown', function(e) {
  //     if (e.key === 'Enter') {
  //       openCloseUpView(e);
  //     }
  //   });

  //   return video;
  // }

}

const closeUpView = document.getElementById('closeUpView');
const closeUpImg = document.getElementById('closeUpImg');
const closeUpVideo = document.getElementById('closeUpVideo');
const closeUpImgTitle = document.getElementById('closeUpImgTitle');

const imgs = document.getElementsByClassName('photo-container');
let index = 0;


function closeDialog () {
    closeUpView.style.display = 'none';
}

function openCloseUpView (event) {
    const elem = event.currentTarget;
    const elemUrl = elem.dataset.url;
    const children = Array.from(event.currentTarget.parentElement.children);
    index = children.indexOf(event.currentTarget);

    closeUpView.style.display = 'flex';

    if (elem.dataset.category == 'video') {
        closeUpImg.style.display = 'none';
        closeUpVideo.style.display = 'block';
        closeUpVideo.setAttribute('src', elemUrl);
        closeUpVideo.setAttribute('controls', '');
    }
    if (elem.dataset.category == 'picture') {
        closeUpVideo.style.display = 'none';
        closeUpImg.style.display = 'block';
        closeUpImg.setAttribute('src', elemUrl);
    }
    closeUpImgTitle.textContent = elem.dataset.title;
}

function nextImg () {
    index += 1;
    let max = imgs.length - 2;
    if (index > max) {
        index = 0;
    }

    console.log(index);
    var elem = imgs[index];
    var elemUrl = elem.dataset.url;

    if (elem.dataset.category == 'video') {
        closeUpImg.style.display = 'none';
        closeUpVideo.style.display = 'block';
        closeUpVideo.setAttribute('src', elem.dataset.url);
        closeUpVideo.setAttribute('controls', '');
    }
    if (elem.dataset.category == 'picture') {
        closeUpVideo.style.display = 'none';
        closeUpImg.style.display = 'block';
        closeUpImg.setAttribute('src', elemUrl);
    }
}

function previousImg () {
    index -= 1;
    let max = imgs.length - 2;
    if (index < 0) {
        index = max;
    }

    console.log(index);
    var elem = imgs[index];
    var elemUrl = elem.dataset.url;

    if (elem.dataset.category == 'video') {
        closeUpImg.style.display = 'none';
        closeUpVideo.style.display = 'block';
        closeUpVideo.setAttribute('src', elem.dataset.url);
        closeUpVideo.setAttribute('controls', '');
    }
    if (elem.dataset.category == 'picture') {
        closeUpVideo.style.display = 'none';
        closeUpImg.style.display = 'block';
        closeUpImg.setAttribute('src', elemUrl);
    }
}
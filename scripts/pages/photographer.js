const urlParams = new URLSearchParams(window.location.search);

var profileName = urlParams.get('name');

const photographer = new Photographer(profileName);
    
    async function getPhotographerData() {
       const photographerProfile = await photographer.profile;
       const photographerWork = await photographer.work;

       const data = { "profile" : photographerProfile, "work" : photographerWork};
       
       return data;
    }

    async function displayData(profile, work) {
        const photographerHeader =document.getElementById('photograph-header');
        const photographerWork =document.getElementById('work');
        const profileImg = document.getElementById('profile-picture');
        const nbOfLikes = document.getElementById('likes');
        const price = document.getElementById('price-tag');
        const modal = document.getElementById('modalPhotographerName');

        const profileInformations = photographer.displayProfile(profile);
        const photographWork = photographer.displayWork(work);
        
        photographerHeader.prepend(profileInformations);
        photographerWork.append(photographWork);
        profileImg.setAttribute('name', profile.name);
        profileImg.style.backgroundImage = 'url(../assets/photographers/' + profile.portrait + ')';
        nbOfLikes.prepend(photographer.getTotalOfLikes(work));
        price.textContent = profile.price + ' €/ Jour ';
        modal.textContent = profile.name;

    }

    async function init() {
        // Récupère les datas des photographes
        const { profile , work } = await getPhotographerData();
        displayData(profile, work);

    }
    
    init();
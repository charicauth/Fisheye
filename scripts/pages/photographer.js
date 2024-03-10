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
        const photographHeader =document.getElementById('photograph-header');
        const profileImg = document.getElementById('profile-picture');

        const profileInformations = photographer.displayProfile(profile);
        profileImg.style.backgroundImage = 'url(../assets/photographers/' + profile.portrait + ')';


        photographHeader.prepend(profileInformations);
        profileImg.appendChild(img);
    }


    async function init() {
        // Récupère les datas des photographes
        const { profile , work } = await getPhotographerData();
        displayData(profile, work);

    }
    
    init();
const urlParams = new URLSearchParams(window.location.search);

var profileName = urlParams.get('name');
var photographer = [];
var photographerData = [];
    
    async function getPhotographerData() {
        try {
            // Update the path to '../data/photographers.json'
            const response = await fetch('../data/photographers.json');

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            photographers = data.photographers;

            const profile = photographers.find(photographer => photographer.name === profileName);

            if (profile) {
                const profileData = data.media.filter(media => media.photographerId === profile.id);
                photographer = profile;
                photographerData = profileData;
                console.log(profileData);
                console.log(profile);
            } else {
                console.log('Profile not found');
            }

            return (photographers, photographerData);
        } catch (error) {
            console.error('Error fetching photographers:', error.message);
            return null;
        }
    }

    async function displayData(photographer, photographerData) {
        // const photographersSection = document.querySelector(".photographer_section");
        const photographHeader = document.getElementById("photographer_header");
        
        const photographerModel = photographerTemplate(photographer, photographerData);

        photographHeader.appendChild(photographProfile);

        const photographProfile = photographerModel.getPhotographHeader();

        
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographer , photographerData } = await getPhotographerData();
        displayData(photographer);
    }
    
    init();
class Photographer {

    constructor(name) {
        this.name = name;
        
        this.profile = this.getProfile();
        this.work = this.getWork();
    }

    async getDataInformation (searchrequest) {
        try {
            // Update the path to '../data/photographers.json'
            const response = await fetch('../data/photographers.json');
        
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
        
            const data = await response.json();
            const photographers = data.photographers;
        
            const profile = photographers.find(photographer => photographer.name === this.name);
        
            if (profile) {
                const work = data.media.filter(media => media.photographerId === profile.id);
        
                if (searchrequest == 'photographerProfile') {
                    return await profile;
                } else if (searchrequest == 'photographerWork'){
                    return await work;
                }
            } else {
                console.log('Profile not found');
            }
        
        } catch (error) {
            console.error('Error fetching photographers:', error.message);
            return null;
        }
    }

    async getProfile () {
        return this.getDataInformation('photographerProfile');
    }
    getWork () {
        return this.getDataInformation('photographerWork');
    }

    displayProfile(profile) {
        const name = document.createElement('h1');
        name.textContent = profile.name;
        const location = document.createElement('h2');
        location.textContent=profile.city + ', ' + profile.country;
        const tagline = document.createElement('p');
        tagline.textContent = profile.tagline;
        const container = document.createElement('div');
        container.setAttribute('id', 'profile-info');
        container.setAttribute('class', 'profile-info');
        container.appendChild(name);
        container.appendChild(location);
        container.appendChild(tagline);

        return (container);
    }
    
}


// function photographerTemplate() {
//     const { name, city, price, country, tagline } = photographer;
//     // const name = photographer.name;
//     // const city = photographer.city;
//     // const price = photographer.price;
//     // const country = photographer.country;
//     // const tagline = photographer.tagline;
//     const picture = `../assets/photographers/${photographer.portait}`;
    

//     function getPhotographHeader () {

//         // Definition des elements et de leurs attributs et valeurs. 
//         const profileDataContainer = document.createElement( 'div' );
//         profileDataContainer.setAttribute('id', 'profileInformations');

//         const profileName = document.createElement( 'h1' );
//         profileName.setAttribute('id', 'profileName');
//         profileName.textContent = name;

//         const profileLocationContainer = document.createElement( 'div' );
//         profileLocationContainer.setAttribute('id', 'ProfileLocationContainer');

//         const profileLocation = document.createElement( 'h2' );
//         profileLocation.setAttribute('id', 'profileLocation');
//         profileLocation.textContent = city + ', ' + country;

//         const profileTagline = document.createElement( 'p' );
//         profileTagline.setAttribute('id', 'profileTagline');
//         profileTagline.textContent = tagline;

//         // gestion de l'image de profile
//         const imgContainer = document.createElement( 'div' );
//         imgContainer.setAttribute( 'id' , 'profilePicture');
//         imgContainer.style.backgroundImage = 'url(' + picture + ')';

//         // Composition des elements
//         profileLocationContainer.appendChild(profileLocation);
//         profileLocationContainer.appendChild(profileTagline);

//         profileDataContainer.appendChild(profileName);
//         profileDataContainer.appendChild(profileLocationContainer);

//         return (profileDataContainer , imgContainer);
        

//     }
//     return { price , getPhotographHeader } 
// }

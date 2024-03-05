function photographerTemplate() {
    const { name, city, price, country, tagline } = photographer;
    // const name = photographer.name;
    // const city = photographer.city;
    // const price = photographer.price;
    // const country = photographer.country;
    // const tagline = photographer.tagline;
    const picture = `../assets/photographers/${photographer.portait}`;
    

    function getPhotographHeader () {

        // Definition des elements et de leurs attributs et valeurs. 
        const profileDataContainer = document.createElement( 'div' );
        profileDataContainer.setAttribute('id', 'profileInformations');

        const profileName = document.createElement( 'h1' );
        profileName.setAttribute('id', 'profileName');
        profileName.textContent = name;

        const profileLocationContainer = document.createElement( 'div' );
        profileLocationContainer.setAttribute('id', 'ProfileLocationContainer');

        const profileLocation = document.createElement( 'h2' );
        profileLocation.setAttribute('id', 'profileLocation');
        profileLocation.textContent = city + ', ' + country;

        const profileTagline = document.createElement( 'p' );
        profileTagline.setAttribute('id', 'profileTagline');
        profileTagline.textContent = tagline;

        // gestion de l'image de profile
        const imgContainer = document.createElement( 'div' );
        imgContainer.setAttribute( 'id' , 'profilePicture');
        imgContainer.style.backgroundImage = 'url(' + picture + ')';

        // Composition des elements
        profileLocationContainer.appendChild(profileLocation);
        profileLocationContainer.appendChild(profileTagline);

        profileDataContainer.appendChild(profileName);
        profileDataContainer.appendChild(profileLocationContainer);

        return (profileDataContainer , imgContainer);
        

    }
    return { price , getPhotographHeader } 
}
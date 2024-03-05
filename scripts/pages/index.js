var photographers = [];
    
    async function getPhotographers() {

        try {
            // Update the path to '../data/photographers.json'
            const response = await fetch('../data/photographers.json');
        
            // Check if the request was successful (status code 200)
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
        
            // Parse the JSON response and store it in a variable
            const photographers = await response.json();

            return photographers;
          } catch (error) {
            console.error('Error fetching photographers:', error.message);
            // Handle the error as needed
            return null; // Return null in case of an error
          }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    

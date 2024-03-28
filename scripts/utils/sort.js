document.getElementById('work-filter').addEventListener('change', function() {
    var sortBy = this.value;
    const photoContainer = document.getElementById('work').children[0];
    
    var photoElements = Array.from(photoContainer.children);
    const dummyElement = document.getElementById('dummy-child');
    
    if (dummyElement) {
        photoElements = photoElements.filter (container => {
            return container.id !== 'dummy-child';
        });
    }
    
    if (sortBy === 'popularité') {
        photoElements.sort((a, b) => {
            const likesA = parseInt(a.querySelector('p').textContent);
            const likesB = parseInt(b.querySelector('p').textContent);
            return likesB - likesA;
        });
        
        //clear existing content and append the sorted elements back to the parent container
        photoContainer.innerHTML = ''; // Clear existing content
        photoElements.forEach(container => {
            photoContainer.appendChild(container);
        });    
    }

    if (sortBy === 'date') {
        photoElements.sort((a, b) => {
            var dateA = new Date(a.dataset.date);
            var dateB = new Date(b.dataset.date);
            return dateB - dateA;
        });
        
        //clear existing content and append the sorted elements back to the parent container
        photoContainer.innerHTML = ''; // Clear existing content
        photoElements.forEach(container => {
            photoContainer.appendChild(container);
        });        
    }

    if (sortBy === 'titre') {
        photoElements.sort((a, b) => {
            var titleA = a.querySelector('h2').textContent.trim().toLowerCase();
            var titleB = b.querySelector('h2').textContent.trim().toLowerCase();
            return titleA.localeCompare(titleB);
        });
        
        //clear existing content and append the sorted elements back to the parent container
        photoContainer.innerHTML = ''; // Clear existing content
        photoElements.forEach(container => {
            photoContainer.appendChild(container);
        });
    }
    
    if (dummyElement) {
        photoContainer.appendChild(dummyElement);
    }
});

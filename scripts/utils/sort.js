document.getElementById('work-filter').addEventListener('change', function(){
    var sortBy = this.value;
    var photoContainer = document.getElementById('work').children[0];
    var photoElements = Array.from(photoContainer.children);

    if (sortBy === 'popularité') {
        photoElements.sort(function(a, b) {
            var likesA = parseInt(a.querySelector('p').textContent);
            var likesB = parseInt(b.querySelector('p').textContent);
            console.log(likesB - likesA);
            return likesB - likesA;
        });

        photoElements.forEach(function(element) {
            photoContainer.appendChild(element);
        });
    }
    console.log(photoElements);
});
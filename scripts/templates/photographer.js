function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `../assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const imgContainer = document.createElement( 'div' );
        const link = document.createElement( 'a' );
        link.setAttribute( 'href', '/photographer.html?name=' + name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        imgContainer.style.backgroundImage = 'url(' + picture + ')';
        link.appendChild(imgContainer);
        link.appendChild(h2);
        article.appendChild(link);
        return (article);
    }
    return { name, picture, getUserCardDOM } 
}
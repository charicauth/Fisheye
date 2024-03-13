function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const island = document.getElementById("island");
	modal.style.display = "block";
    main.style.opacity = .5;
    island.style.opacity = .8
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const island = document.getElementById("island");
	modal.style.display = "none";
    main.style.opacity = 1;
    island.style.opacity = 1;
}

// il récupére l'élément Id Titre
let info = document.getElementById("titre");
// il récupére le bouton rejouer 
document.getElementById("rejouer").style.display = "none";
// il ajoute du texte avec la propriété textContent. 
info.textContent = "Super Morpion";
// il ajoute un événement pour charger le jeu 
window.addEventListener('load', (event) => {
    // il récupére tous les "td"
    let getAllCells = document.querySelectorAll('td');
    // il utilise le foreach qui permet de parcourir le tableau et d'éxécuter une fonction anonyme sur chaque élément du tableau 
    getAllCells.forEach(cell => {
        cell.addEventListener("click", function () {
            jouer(cell.id);
        })
    })
});
// il sélectionne le bouton rejouer sur l'événement click 
document.querySelector("#boutonRejouer").addEventListener("click", function () {
    document.getElementById("rejouer").style.display = "none";
    info.textContent = "Super Morpion";
    let getAllCells = document.querySelectorAll('td');
    getAllCells.forEach(cell => {
        cell.style.backgroundPosition = "left";
        cell.style.pointerEvents = 'auto';
        delete cell.dataset.played;
    })
});

function jouer(zone) {
    let elements = document.querySelectorAll('[data-played]');
    let carre = document.getElementById(zone);
    if (elements.length % 2 === 1) {
        carre.style.backgroundPosition = "center";
        carre.dataset.played = "croix";
    } else {
        carre.style.backgroundPosition = "right";
        carre.dataset.played = "rond";
    }
    carre.style.pointerEvents = 'none';
    if (!checkWin() && document.querySelectorAll('[data-played]').length == 9) {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }
}

function checkWin() {
    if (verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zonea2").dataset.played, document.getElementById("Zonea3").dataset.played)
        || verifEgalite(document.getElementById("Zoneb1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zoneb3").dataset.played)
        || verifEgalite(document.getElementById("Zonec1").dataset.played, document.getElementById("Zonec2").dataset.played, document.getElementById("Zonec3").dataset.played)
        || verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb1").dataset.played, document.getElementById("Zonec1").dataset.played)
        || verifEgalite(document.getElementById("Zonea2").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec2").dataset.played)
        || verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb3").dataset.played, document.getElementById("Zonec3").dataset.played)
        || verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec3").dataset.played)
        || verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec1").dataset.played)
    ) {
        return true;
    } else {
        return false;
    }
}

function verifEgalite(zone1, zone2, zone3) {
    if (zone1 === zone2 && zone1 === zone3 && zone1 != undefined) {
        info.textContent = `Les ${zone1} ont gagné`;
        document.getElementById("rejouer").style.display = "initial";
        let getAllCells = Array.from(document.querySelectorAll('td'));
        for (let i = 0; i < getAllCells.length; i++) {
            getAllCells[i].style.pointerEvents = 'none';
            
        }
        return true;
    } else {
        return false;
    }
}
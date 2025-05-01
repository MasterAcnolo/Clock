var timezone = "Europe/Paris"; // Défaut
var intervalId;

function updateClockUTC() {
    const date = new Date();

    try {
        const options = { timeZone: timezone, hour12: false };
        const timeString = date.toLocaleString('en-GB', options);
        const parts = timeString.split(/[\s:/]+/);

        const year = parseInt(parts[2], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[0], 10);
        const hours = parseInt(parts[3], 10);
        const minutes = parseInt(parts[4], 10);
        const seconds = parseInt(parts[5], 10);

        now = new Date(year, month, day, hours, minutes, seconds);
    } catch (error) {
        console.error("Erreur de fuseau horaire:", error);
        now = new Date();
    }

    if (typeof call === "function") {
        call(); // Appelle la fonction de clock.js si disponible
    } else {
        console.warn("La fonction call() n'est pas encore définie.");
    }
}

function startClock() {
    clearInterval(intervalId);
    updateClockUTC();
    intervalId = setInterval(updateClockUTC, 1000);
}

// Sécurité DOM : n'ajoute l'event listener que si l'élément existe
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("selectFuseau"); // on prend le 1er élément

    if (select) {
        select.addEventListener("change", function () {
            timezone = this.value;
            console.log("Fuseau sélectionné :", timezone); // Debug
            startClock(); // relancer la clock avec le bon fuseau
        });
    } else {
        console.warn(".selectFuseau introuvable dans le DOM.");
    }

    startClock(); // Lancer la clock dès le départ
});

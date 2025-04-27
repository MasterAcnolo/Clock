var timezone = "Europe/Paris"; //Défaut
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

    call(); // Appelle la fonction de clock.js
}

function startClock() {
    clearInterval(intervalId);
    updateClockUTC();
    intervalId = setInterval(updateClockUTC, 1000);
}

document.getElementById("selectFuseau").addEventListener("change", function() {
    timezone = this.value;
    startClock();
});

startClock(); // Lance l'horloge immédiatement au chargement

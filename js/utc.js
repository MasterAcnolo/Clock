var timezone = "Europe/Paris"; // Défaut (UTC +1)
var intervalId;

// Mise à jour de l'horloge
function updateClockUTC() {
    const date = new Date();

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

         if (typeof call === "function") {
                call(); // Appelle la fonction de clock.js si disponible
            }

    }

// Appel Initial
function startClock() {
    clearInterval(intervalId);
    updateClockUTC();
    setInterval(updateClockUTC, 1000);
}

// Gestion du changement de fuseau horaire.
const select = document.getElementById("selectFuseau");

if (select) {

    select.addEventListener("change", function () {
        timezone = this.value;
        startClock();
    });
}

startClock();

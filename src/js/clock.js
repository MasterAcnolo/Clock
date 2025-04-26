function call() {
    clock(); // Appel Initial

    function clock() {
        var temps = new Date();

        var Annee = temps.getFullYear();
        var Mois = temps.getMonth();
        var Jour = temps.getDate();
        var Heures = temps.getHours();
        var Minutes = temps.getMinutes();
        var Secondes = temps.getSeconds();
        // var Milliseconds = temps.getMilliseconds(); 

        const AiguilleSecondes = document.getElementById("AiguilleSecondes");
        const AiguilleMinutes = document.getElementById("AiguilleMinutes");
        const AiguilleHeures = document.getElementById("AiguilleHeures");

        const angleSecondes = Secondes * 6; // 360/60 = 6 degrés par seconde
        const angleMinutes = (Minutes + Secondes / 60) * 6; 
        const angleHeures = (Heures % 12 + Minutes / 60) * 30; // le % sert à rester dans une horloge à 12H

        // Mise à jour de l'heure
        Month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        document.getElementById("Mois").innerHTML = Month[Mois];
        
        if (Heures < 10) { Heures = '0' + Heures; }
        if (Minutes < 10) { Minutes = '0' + Minutes; } // Ca Ajoute un 0 si N < 10
        if (Secondes < 10) { Secondes = '0' + Secondes; }

        document.getElementById("SecondesTexte").innerHTML = Secondes;
        document.getElementById("MinutesTexte").innerHTML = Minutes;
        document.getElementById("HeuresTexte").innerHTML = Heures;
        document.getElementById("Jour").innerHTML = Jour;
        document.getElementById("Annee").innerHTML = Annee;

        // Fonction pour éviter le spin (évite la transition brusque)
        function updateAngle(element, angle, isSecond = false) {
            const currentAngle = parseFloat(element.style.transform.replace("rotate(", "").replace("deg)", ""));
            
            // Si l'angle actuel est proche de 360 ou de 0, évite la transition brutale
            if (isSecond && Math.abs(currentAngle - angle) > 300) {
                element.style.transition = "none"; // Pas de transition pour éviter le spin
                element.style.transform = `rotate(${angle}deg)`;
                setTimeout(() => {
                    element.style.transition = "transform 0.1s linear"; // Rétablir la transition après la mise à jour
                }, 100);
            } else {
                element.style.transform = `rotate(${angle}deg)`;
            }
        }

        // Mise à jour des aiguilles
        updateAngle(AiguilleSecondes, angleSecondes, true);
        updateAngle(AiguilleMinutes, angleMinutes);
        updateAngle(AiguilleHeures, angleHeures);
    }

    setInterval(clock, 1000); // Délai de 1000 ms pour rafraîchir
}

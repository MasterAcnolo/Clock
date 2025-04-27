function call() {
    clock(); // Appel Initial

    function clock() {
        var temps = typeof now !== "undefined" ? now : new Date();

        var Annee = temps.getFullYear();
        var Mois = temps.getMonth();
        var Jour = temps.getDate();
        var Heures = temps.getHours();
        var Minutes = temps.getMinutes();
        var Secondes = temps.getSeconds();

        const AiguilleSecondes = document.getElementById("AiguilleSecondes");
        const AiguilleMinutes = document.getElementById("AiguilleMinutes");
        const AiguilleHeures = document.getElementById("AiguilleHeures");

        const angleSecondes = Secondes * 6;
        const angleMinutes = (Minutes + Secondes / 60) * 6;
        const angleHeures = (Heures % 12 + Minutes / 60) * 30;

        Month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        document.getElementById("Mois").innerHTML = Month[Mois];
        
        if (Heures < 10) { Heures = '0' + Heures; }
        if (Minutes < 10) { Minutes = '0' + Minutes; }
        if (Secondes < 10) { Secondes = '0' + Secondes; }

        document.getElementById("SecondesTexte").innerHTML = Secondes;
        document.getElementById("MinutesTexte").innerHTML = Minutes;
        document.getElementById("HeuresTexte").innerHTML = Heures;
        document.getElementById("Jour").innerHTML = Jour;
        document.getElementById("Annee").innerHTML = Annee;

        function updateAngle(element, angle, isSecond = false) {
            const currentAngle = parseFloat(element.style.transform.replace("rotate(", "").replace("deg)", ""));
            if (isSecond && Math.abs(currentAngle - angle) > 300) {
                element.style.transition = "none";
                element.style.transform = `rotate(${angle}deg)`;
                setTimeout(() => {
                    element.style.transition = "transform 0.1s linear";
                }, 100);
            } else {
                element.style.transform = `rotate(${angle}deg)`;
            }
        }

        updateAngle(AiguilleSecondes, angleSecondes, true);
        updateAngle(AiguilleMinutes, angleMinutes);
        updateAngle(AiguilleHeures, angleHeures);
    }
}

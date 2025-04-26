function call(){
            
    clock(); // Appel Initial
    
    function clock(){
        var temps = new Date();

        var Annee = temps.getFullYear();
        var Mois = temps.getMonth();
        var Jour = temps.getDate();
        var Heures = temps.getHours();
        var Minutes = temps.getMinutes();
        var Secondes = temps.getSeconds();
        var Milliseconds = temps.getMilliseconds();


        if( Heures < 10 ){ Heures = '0' + Heures; }
        if( Minutes < 10 ){ Minutes = '0' + Minutes; } // Ca Ajoute un 0 si N < 10
        if( Secondes < 10 ){ Secondes = '0' + Secondes; }

        // console.log(Secondes) // Utile pour débuguer
        
        document.getElementById("Secondes").innerHTML= Secondes
        document.getElementById("Minutes").innerHTML= Minutes
        document.getElementById("Heures").innerHTML= Heures
        document.getElementById("Jour").innerHTML= Jour
        document.getElementById("Année").innerHTML= Annee

        // document.getElementById("Mois").innerHTML= Mois + 1
        Month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
        document.getElementById("Mois").innerHTML= Month[Mois]

        
    }
    setInterval(clock,1000); // Delay de 1000 ms de refresh
}


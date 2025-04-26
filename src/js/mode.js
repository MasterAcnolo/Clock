const toggleButton = document.getElementById("BoutonMode");
const text = document.getElementById("textmode");
const html = document.documentElement; // sélectionne <html>

let darkmode = localStorage.getItem("dark-mode");

function enableDarkMode() {
    html.classList.add('dark-theme');
    localStorage.setItem("dark-mode", "enabled"); 
    console.log("Mode Sombre");
    text.innerHTML = "Mode Sombre";
    
}

function disableDarkMode() {
    html.classList.remove('dark-theme')
    localStorage.setItem("dark-mode", "disabled"); 
    console.log("Mode Clair");
    text.innerHTML = "Mode Clair";
    
}


if (toggleButton) {
    if (darkmode === "enabled") {
        enableDarkMode();
    }

    toggleButton.addEventListener("click", (e) => {
        darkmode = localStorage.getItem("dark-mode"); 
        if (darkmode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
} else {
    console.error("Le bouton BoutonMode est introuvable !");
}

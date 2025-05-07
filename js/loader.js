window.addEventListener("load", () => {

  const scriptsToLoad = [
    "js/clock.js",
    "js/utc.js",
    "js/themeswapper.js",
  ];

  const cssToLoad = [
    "styles/import.css",
    
  ];

  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = () => {
        console.log(`CSS chargé : ${href}`);
        resolve();
      };
      link.onerror = (error) => {
        console.error(`Erreur lors du chargement du fichier CSS : ${href}`, error);
        reject(error);
      };
      document.head.appendChild(link);
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        console.log(`${src} chargé`);
        resolve();
      };
      script.onerror = (error) => {
        console.error(`Erreur de chargement du script : ${src}`, error);
        reject(new Error(`Erreur de chargement: ${src}`));
      };
      document.body.appendChild(script);
    });
  }

  // Charge les CSS puis les scripts JS
  Promise.all(cssToLoad.map(loadCSS)).then(() => {
    return scriptsToLoad.reduce((chain, script) => {
      return chain.then(() => loadScript(script));
    }, Promise.resolve());
  })
  .then(() => {
    console.log("✅ Tous les scripts ont été chargés !");

    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");

    const content = document.getElementById("content");
    if (content) content.style.display = "block";

    if (typeof call === "function") call();
    if (typeof startClock === "function") startClock();
  })
  .catch(err => {
    console.error("Erreur lors du chargement des fichiers :", err);
  });
});

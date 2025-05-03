window.addEventListener("load", () => {
  
  const scriptsToLoad = [
    "src/js/clock.js",
    "src/js/utc.js",
    "src/js/mode.js",
    
  ];

  const cssToLoad = [
    "styles/css/main.css",
    "styles/css/digitalclock.css",
    "styles/css/analogclock.css",
    "styles/css/theme.css",
    "styles/css/UTC.css",
    "styles/css/loader.css"
    
  ];

  
  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
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
      script.onerror = () => reject(new Error(`Erreur de chargement: ${src}`));
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

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  document.body.classList.remove("loading");
  loader.classList.add("hidden");

  setTimeout(() => {
    loader.remove();
  }, 800); 
});
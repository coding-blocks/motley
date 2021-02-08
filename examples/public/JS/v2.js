window.onload = function () {
  document.querySelector("#mega-nav-toggle").addEventListener("click", () => {
    const meganav = document.querySelector("#mega-nav");

    if (meganav.classList.contains("d-none")) {
      meganav.classList.remove("d-none");
    } else {
      meganav.classList.add("d-none");
    }
  });
};

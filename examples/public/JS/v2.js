// window.onload = function () {
//   document.querySelector("#mega-nav-toggle").addEventListener("click", () => {
//     const meganav = document.querySelector("#mega-nav");

//     if (meganav.classList.contains("d-none")) {
//       meganav.classList.remove("d-none");
//     } else {
//       meganav.classList.add("d-none");
//     }
//   });

//   document.querySelectorAll(".universe").forEach((universe) => {
//     let reduceAngle = 60;
//     universe.querySelectorAll(".universe__orbit").forEach((orbit) => {
//       let planets = orbit.querySelectorAll(".universe__orbit__planet");
//       let angle = 360 - 90;
//       let dangle = 360 / planets.length;
//       for (let i = 0; i < planets.length; ++i) {
//         let planet = planets[i];
//         angle += dangle;
//         planet.style.transform = `rotate(${angle - reduceAngle}deg) translate(${
//           orbit.clientWidth / 2
//         }px) rotate(-${angle - reduceAngle}deg)`;
//       }

//       reduceAngle += 45;
//     });
//   });
// };

document.addEventListener("DOMConentLoaded", function (event) {
  document.querySelector("#mega-nav-toggle").addEventListener("click", () => {
    const meganav = document.querySelector("#mega-nav");

    if (meganav.classList.contains("d-none")) {
      meganav.classList.remove("d-none");
    } else {
      meganav.classList.add("d-none");
    }
  });
});

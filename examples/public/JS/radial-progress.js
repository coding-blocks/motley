var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  var max = -219.99078369140625;
  forEach(
    document.querySelectorAll(".radial-progress"),
    function (index, value) {
      percent = value.getAttribute("data-progress");
      value
        .querySelector(".fill")
        .setAttribute(
          "style",
          "stroke-dashoffset: " + ((100 - percent) / 100) * max
        );
    }
  );
});

// window.onload = function () {
//   var max = -219.99078369140625;
//   forEach(
//     document.querySelectorAll(".radial-progress"),
//     function (index, value) {
//       percent = value.getAttribute("data-progress");
//       value
//         .querySelector(".fill")
//         .setAttribute(
//           "style",
//           "stroke-dashoffset: " + ((100 - percent) / 100) * max
//         );
//     }
//   );
// };

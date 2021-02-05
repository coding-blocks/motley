window.onload = function () {
  document.querySelector("#online-courses").classList.add("active");

  const onlineCourseButton = document.querySelector("#online-courses");
  const classroomCourseButton = document.querySelector("#classroom-courses");
  const liveCourseButton = document.querySelector("#live-courses");

  const onlineCourseSection = document.querySelector("#online-courses-section");
  const classroomCourseSection = document.querySelector(
    "#classroom-courses-section"
  );
  const liveCourseSection = document.querySelector("#live-courses-section");

  const courseSection = [
    [onlineCourseButton, onlineCourseSection],
    [classroomCourseButton, classroomCourseSection],
    [liveCourseButton, liveCourseSection],
  ];

  // for ([button, section] of courseSection) {
  //   button.addEventListener("mouseover", () => {
  //     section.classList.remove("d-none");
  //   });
  // }

  // courseSection.forEach(([button, section]) => {
  //   button.addEventListener("mouseover", () => {
  //     section.classList.remove("d-none");
  //   });
  // });
};

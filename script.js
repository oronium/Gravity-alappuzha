// const navFunc = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-list");
//   const bg = document.querySelector(".main-nav");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     bg.classList.toggle("nav-background");
//   });
// };
// navFunc();
const barFunc = function () {
  const burger = document.querySelector(".burger");
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");
  const nav = document.querySelector(".nav-list");
  const main = document.querySelector(".main-nav");

  burger.addEventListener("click", function () {
    line1.classList.toggle("line-1-active");
    line2.classList.toggle("line-2-active");
    line3.classList.toggle("line-3-active");
    nav.classList.toggle("nav-active");
    main.classList.toggle("main-nav-active");
  });
  nav.addEventListener("click", function () {
    line1.classList.remove("line-1-active");
    line2.classList.remove("line-2-active");
    line3.classList.remove("line-3-active");
    nav.classList.remove("nav-active");
    main.classList.remove("main-nav-active");
  });
};
barFunc();

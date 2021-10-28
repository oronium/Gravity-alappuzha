const navFunc = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const bg = document.querySelector(".main-nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    bg.classList.toggle("nav-background");
  });
};
navFunc();

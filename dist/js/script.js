// const arrowButton = document.querySelectorAll(".menu-arrow");
// const hamburgerBtn = document.getElementsByClassName("header__hamburger")[0];
// const navBarLinks = document.getElementsByClassName("header__links")[0];

// arrowButton.forEach((el) =>
//   el.addEventListener("click", (event) => {
//     const subMenu = event.target.parentElement.querySelector(".sub-menu");
//     subMenu.classList.toggle("open");
//   })
// );

// hamburgerBtn.addEventListener("click", () => {
//   navBarLinks.classList.toggle("active");
// });

const btnHamburger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");

const arrowButton = document.querySelectorAll(".menu-arrow");

btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    headerMenu.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
    headerMenu.classList.add("open");
  }
});

arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    const subMenu =
      event.target.parentElement.parentElement.querySelector(".sub-menu");
    subMenu.classList.toggle("open");
  })
);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e = window.screenY;
//   console.log(e);
// });
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", () =>{
// 	window.scroll(0,0);
// });
// html{
// scrol-behavior: smooth;
// }
// ///////// scroll top timeoutfunction  // btn.addEventListener("click", top => {
// btn.addEventListener("click", () => {
//   setTimeout(function () {
//     window.scroll(0, 0);
//   }, 300);
// });

// btn.addEventListener("click", top);

// function top() {
//   setTimeout(function () {
//     window.scroll(0, 0);
//   }, 300);
// }

/* ==Menu Show== */

function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}

showMenu("nav-toggle", "nav-menu");

/* ==Remove Menu== */

const navlink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}
navlink.forEach((n) => n.addEventListener("click", linkAction));

/* == Active Link == */

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive); //"scroll, scrollActive"

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/* ==Change Color Header== */

// window.onscroll = () => {
//   const nav = document.getElementById("header");
//   if (this.scrollY >= 20) nav.classList.add("scroll-header");
//   else nav.classList.remove("scroll-header");
// };

// change the nav color on scroll
// window.onscroll = () => {
//   const nav = document.querySelector(".nav");
//   if (this.scrollY >= 100) nav.classList.add("scroll-header");
//   else nav.classList.remove("scroll-header");
// };

// adapt to change the background of responsive nav
// window.onscroll = () => {
//   const background = document.querySelector(".show");
//   if (this.scrollY >= 200) background.classList.add("scroll-back");
//   else background.classList.remove("scroll-back");
// };

/* ==Preloader== */

const loader = document.querySelector(".preloader");
const hero = document.querySelector(".hero");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    hero.style.display = "block";
    setTimeout(() => (hero.style.opacity = 1), 50);
  }, 1200);
}

init();

/* ==PopUp login== */

window.onload = () => {
  const popup_btns = document.querySelectorAll(".popup-button");

  popup_btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target.dataset.target;

      const popup_el = document.querySelector(target);
      if (popup_el != null) {
        popup_el.classList.toggle("is-active");
      }
    });
  });
};

/* ==Tabs Login== */
("use strict");

function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("activ");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("activ");
    }
  };

  var change = function (e) {
    clear();
    e.target.classList.add("activ");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("activ");
  };

  bindAll();
}

var connectTabs = new Tabs();

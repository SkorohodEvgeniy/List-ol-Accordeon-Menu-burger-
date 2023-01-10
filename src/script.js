/* Menu Burger Jquery*/
/*
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
*/

/* Menu Burger JS*/
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let body = document.getElementsByTagName("body");

function toggleBurgerMenu() {
  headerBurger, headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
}

headerBurger.addEventListener("click", toggleBurgerMenu);

/* Accordion*/
$(document).ready(function () {
  $(".accordion__title").click(function (event) {
    if ($(".accordion").hasClass("one")) {
      $(".accordion__title").not($(this)).removeClass("active");
      $(".accordion__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

/* Timer */
let date = new Date("Feb 15 2023 10:40:00");

function counts() {
  let now = new Date();
  gap = date - now;
  console.log(gap);

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minute = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    document.getElementById("timer-group").innerText = "Акция завершена";
  } else {
    document.getElementById("d").innerText = days;
    document.getElementById("h").innerText = hours;
    document.getElementById("m").innerText = minute;
    document.getElementById("s").innerText = seconds;
  }
}
counts();
setInterval(counts, 1000);

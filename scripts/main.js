const slider = document.querySelectorAll(".accordion-carousel-container");
let isDown = false;
let startX;
let scrollLeft;

slider.forEach((slider) => {
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
});

// accordion functionality

const show = (item) => {
  item.classList.remove("d-none");
};

const hide = (item) => {
  item.classList.add("d-none");
};

let items = document.querySelectorAll(".accordion-body--main .col");
let mainData = document.querySelectorAll(".accordion-body--main");
let clickedData = document.querySelectorAll(".accordion-body--clicked");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    show(document.querySelector(item.getAttribute("data-show-target")));
    hide(document.querySelector(item.getAttribute("data-hide-target")));
  });
});

// for each maindata check data target
// the items clicked get the id = data targets clicked and remove d-none

const accordionHeight = () => {
  if (screen.width < 1280) {
    let container = document.querySelector(".container.position-relative");
    let img = document.querySelector(".left-side-image");
    let buttons = document.querySelector(".buttons-row");
    let accordion = document.querySelector(".accordion-menu");

    let h =
      container.offsetHeight -
      (img.offsetHeight +
        buttons.offsetHeight +
        parseInt(getComputedStyle(accordion).marginTop));

    accordion.style.height = `${h}px`;
  } else {
    let img = document.querySelector(".left-side-image");
    let accordion = document.querySelector(".accordion-menu");

    let h =
      img.offsetHeight +
      (parseInt(getComputedStyle(img).marginTop) -
        parseInt(getComputedStyle(accordion).marginTop));

    accordion.style.height = `${h}px`;
  }
};

accordionHeight()
const slider = document.querySelectorAll(".accordion-body");
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


let items = document.querySelectorAll('.accordion-body--main .col');
let mainData = document.querySelector('.accordion-body--main')
let clickedData = document.querySelectorAll('#headsetCollapse .accordion-body--clicked')

console.log(mainData)

items.forEach((item, idx) => {
  item.addEventListener('click', () => {
    mainData.classList.add('d-none')
    clickedData.forEach(item => item.classList.remove('d-none'))
  })
})
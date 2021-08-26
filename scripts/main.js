const slider = document.querySelectorAll(".accordion-body .row");
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

// when you make them links use this

// const slider = document.querySelector(".wrapper");
//       const preventClick = (e) => {
//         e.preventDefault();
//         e.stopImmediatePropagation();
//       }
//       let isDown = false;
//       var isDragged = false;
//       let startX;
//       let scrollLeft;

//       slider.addEventListener("mousedown", e => {
//         isDown = true;
//         slider.classList.add("active");
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//       });

//       slider.addEventListener("mouseleave", () => {
//         isDown = false;
//         slider.classList.remove("active");
//       });

//       slider.addEventListener("mouseup", e => {
//         isDown = false;
//         const elements = document.getElementsByClassName("book");
//         if(isDragged){
//             for(let i = 0; i<elements.length; i++){
//                   elements[i].addEventListener("click", preventClick);
//             }
//         }else{
//             for(let i = 0; i<elements.length; i++){
//                   elements[i].removeEventListener("click", preventClick);
//             }
//         }
//         slider.classList.remove("active");
//         isDragged = false;
//       });

//       slider.addEventListener("mousemove", e => {
//         if (!isDown) return;
//         isDragged =  true;
//         e.preventDefault();
//         const x = e.pageX - slider.offsetLeft;
//         const walk = (x - startX) * 2;
//         slider.scrollLeft = scrollLeft - walk;
//       });

//       document.getElementsByClassName("book").ondragstart = function() {
//         console.log("Drag start");
//       };

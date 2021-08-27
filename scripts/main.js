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

// function to split the data into parts 8 or less each part


// const bedBaseData = [
//   {
//     title: "a",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "b",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "c",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "d",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "e",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "f",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "g",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "h",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "i",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "j",
//     img: "./assets/Image.png",
//   },
//   {
//     title: "k",
//     img: "./assets/Image.png",
//   },
// ];

// const divide = (data) => {
//   const n = 8; //tweak this to add more items per line
//   const result = new Array(Math.ceil(data.length / n))
//     .fill()
//     .map((_) => data.splice(0, n));
//   return result;
// };

// let bedBaseCollapse = document.querySelector(
//   "#bedBaseCollapse .accordion-body"
// );

// const renderRow = (data, element) => {
//   console.log(data);
//   data.map((item, idx) => {
//     console.log(item)
//     let child = renderItem(item);
//     console.log(child)
//     let html = `
//       <div class="row row-cols-3 row-cols-md-4 flex-nowrap overflow-scroll">
//         ${child}
//       </div>
//       `;
//       console.log(element)
//       element.insertAdjacentHTML(
//         "beforeend",
//         html
//       );      
//   });
// };

// const renderItem = (data) => {
//   let html = "";
//   data.forEach((item, idx) => {
//     html += `
//     <div class="col">
//       <div class="img-container">
//         <img src=${item.img} alt="customize" class="img-fluid" />
//       </div>
//       <p>${item.title}</p>
//     </div>
//     `;
//   });
//   return html;
// };


// renderRow(divide(bedBaseData), bedBaseCollapse)
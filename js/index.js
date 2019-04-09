// Your code goes here

const topImage = document.querySelector('.intro img');
console.log(topImage);

topImage.addEventListener('mouseenter', function(event) {
  event.target.style.height = '200%';
});

topImage.addEventListener('mouseleave', function(event) {
  event.target.style.height = 'initial';
});

const intro = document.querySelector('.intro');
const introh2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');
console.log(intro);

intro.addEventListener('click', function(event) {
  if(event.target === introh2) {
    introh2.textContent += " Have a great time!";
  }
  if(event.target === introP) {
    introP.textContent += " We hope you enjoy your stay!";
  }
});

// const middleImages = document.querySelectorAll(".centerimages");
// console.log(middleImages);
const contentSection = document.querySelector(".content-section");
const middleImage1 = document.getElementById("centerimage1");
const middleImage2 = document.getElementById("centerimage2");

middleImage1.addEventListener('dblclick', function(event) {
  if(event.target.getAttribute("src") === "img/adventure.jpg") {
    event.target.setAttribute("src", "img/fun.jpg");
    middleImage2.setAttribute("src", "img/adventure.jpg");
  } else if(event.target.getAttribute("src") === "img/fun.jpg") {
    event.target.setAttribute("src", "img/adventure.jpg");
    middleImage2.setAttribute("src", "img/fun.jpg");
  }
});

middleImage2.addEventListener('dblclick', function(event) {
  if(event.target.getAttribute("src") === "img/adventure.jpg") {
    event.target.setAttribute("src", "img/fun.jpg");
    middleImage1.setAttribute("src", "img/adventure.jpg");
  } else if(event.target.getAttribute("src") === "img/fun.jpg") {
    event.target.setAttribute("src", "img/adventure.jpg");
    middleImage1.setAttribute("src", "img/fun.jpg");
  }
});
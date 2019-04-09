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



const buttons = document.querySelectorAll(".btn");
buttons.forEach( btn => {
  btn.addEventListener("mouseenter", function(event) {
    btn.style["background-color"] = "purple";
  });
  btn.addEventListener("mouseleave", function(event) {
    btn.style["background-color"] = "hotpink";
  });
});

const navItems = document.querySelectorAll("a");

// prevent refresh
navItems.forEach( element => {
  element.addEventListener("click", function(event) {
    event.preventDefault()
  });
});

const bottomImage = document.querySelector(".content-destination img");

window.addEventListener("keydown", function(event) {
  bottomImage.setAttribute("style", "opacity: 0.5;");
});

window.addEventListener("keyup", function(event) {
  bottomImage.setAttribute("style", "opacity: 1;");
});
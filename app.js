var landingBackground = document.querySelector("#landing-bg");
// var navBar = document.querySelector("#topnav");
var navBar = document.querySelector(".Navbar_Wrapper");
var navImage = document.querySelector(".Navbar_Image");
var heroContainer = document.querySelector(".intro-scroll-down");
var heroSlider = document.querySelector("#hero-slider-top");
var fixed = false;
var fixPoint = getDistance();
var yScrollPosition;
// var readout = document.getElementById("readout");
// var win = document.defaultView;
// var landingTop = document.querySelector(".landing-wrapper");
console.log(navImage.classList);



function getDistance() {
  var topDistance = navBar.offsetTop;
  return topDistance;
}

window.onload = function () {
  navBar.style.width = `${heroContainer.clientWidth}px`;
};

window.onscroll = function () {
  console.log(`${navBar.clientHeight}px`);
  
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  // readout.innerHTML = fixPoint + "   " + distance + "   " + offset + "   " + fixed;
  if ((distance <= 0) && !fixed) {
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    navImage.classList.add("Navbar_Image_Fade");
    heroSlider.style.top = `${navBar.clientHeight}px`;
    fixed = true;
  } else if (fixed && (offset <= fixPoint)) {
    navBar.style.position = "static";
    navImage.classList.remove("Navbar_Image_Fade");
    heroSlider.style.top = "0px";
    fixed = false;
  }
};

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

function scrollLoop() {
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * -0.3, landingBackground);
  setTranslate(0, yScrollPosition * -0.08, heroSlider);
  requestAnimationFrame(scrollLoop);
}

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");
  
  navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
}
document.querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);
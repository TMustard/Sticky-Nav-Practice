var landingBackground = document.querySelector("#landing-bg");
var navBar = document.querySelector("#topnav");
var heroSlider = document.querySelector("#hero-slider-top");
var fixed = false;
var fixPoint = getDistance();
var yScrollPosition;
// var readout = document.getElementById("readout");
// var win = document.defaultView;
// var landingTop = document.querySelector(".landing-wrapper");



function getDistance() {
  var topDistance = navBar.offsetTop;
  return topDistance;
}

window.onscroll = function () {
  console.log(`${navBar.clientHeight}px`);
  
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  // readout.innerHTML = fixPoint + "   " + distance + "   " + offset + "   " + fixed;
  if ((distance <= 0) && !fixed) {
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    // will need to change with the nav height
    heroSlider.style.top = `${navBar.clientHeight}px`;
    fixed = true;
  } else if (fixed && (offset <= fixPoint)) {
    navBar.style.position = "static";
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
  setTranslate(0, yScrollPosition * -0.15, heroSlider);
  requestAnimationFrame(scrollLoop);
}


var landingBackground = document.querySelector("#landing-bg");
var navBar = document.querySelector("#topnav");
var fixed = false;
var fixPoint = getDistance();
var yScrollPosition;
// var readout = document.getElementById("readout");
// var win = document.defaultView;
// var landingTop = document.querySelector(".landing-wrapper");
// console.log(pageYOffset);



function getDistance() {
  var topDistance = navBar.offsetTop;
  // console.log(topDistance);
  // console.log(window.pageYOffset);
  return topDistance;
}

window.onscroll = function () {
  var distance = getDistance() - window.pageYOffset;
  console.log(distance);
  var offset = window.pageYOffset;
  // readout.innerHTML = fixPoint + "   " + distance + "   " + offset + "   " + fixed;
  if ((distance <= 0) && !fixed) {
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    fixed = true;
  } else if (fixed && (offset <= fixPoint)) {
    navBar.style.position = "static";
    // navBar.style.top = "-50px";
    // navBar.style.top = "50vh";
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
  requestAnimationFrame(scrollLoop);
}


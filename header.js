function changeCss () {
  var navElement = document.querySelector("nav");
  if(this.scrollY > window.innerHeight / (100 / 90))  {
    navElement.style.backgroundImage = "linear-gradient(rgba(180,223, 232,0.9) 30%, rgba(255,255,255,0.01) 100%)";
    navElement.style.mixBlendMode = "luminosity";
    document.body.style.setProperty("--a-hover", "#FFFFFF");
  } else {
    navElement.style.backgroundImage = "unset";
  }
}
window.addEventListener("scroll", changeCss , false);
window.addEventListener("DOMContentLoaded", changeCss)

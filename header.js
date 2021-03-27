function changeCss () {
  var navElement = document.querySelector("nav.desktop");
  if(this.scrollY > window.innerHeight / (100 / 90))  {
    navElement.style.backgroundImage = "linear-gradient(rgba(180,223, 232,1) 20%, rgba(254,254,254,0.01) 99%)";
    navElement.style.mixBlendMode = "luminosity";
    document.body.style.setProperty("--a-hover", "#FFFFFF");
  } else {
    navElement.style.backgroundImage = "unset";
  }
}
window.addEventListener("scroll", changeCss , false);
window.addEventListener("DOMContentLoaded", changeCss);

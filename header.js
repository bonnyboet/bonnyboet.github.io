function changeCss () {
  var navElement = document.querySelector("nav-bg-blue", "nav-bg-grey", "nav-bg-grey-shadow");
  if(this.scrollY > window.innerHeight / (100 / 50))  {
    navElement.style.display = "none";
    document.body.style.setProperty("--a-hover", "#FFFFFF");
  } else {
    navElement.style.backgroundImage = "unset";
  }
}
window.addEventListener("scroll", changeCss , false);
window.addEventListener("DOMContentLoaded", changeCss);

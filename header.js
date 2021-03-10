function changeCss () {
  var navElement = document.querySelector("nav");
  this.scrollY > window.innerHeight / (100 / 90) ? navElement.style.backgroundColor = "#000000DD" :  navElement.style.backgroundColor = "unset";
}
window.addEventListener("scroll", changeCss , false);

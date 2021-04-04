function mobileNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav-destkop ul").style = "";
    document.querySelectorAll(".nav-destkop ul > a").style = "";

  } else {
    document.querySelector(".nav-destkop ul").style = "";
    document.querySelectorAll(".nav-destkop ul > a").style = "";
  }
}

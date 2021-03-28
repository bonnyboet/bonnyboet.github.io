$(document).ready(function(){
	$('#nav-mobile-launch').click(function() {
	    $("nav.nav-mobile-on").slideToggle();
	});


	$('#nav-mobile-close').click(function() {
	    $('nav.nav-mobile-on').slideUp();
	});

  $('nav.mobile a').on('click', function(){
          $("nav.mobile").slideUp();
      });

});

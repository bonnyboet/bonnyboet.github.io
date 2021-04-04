$(document).ready(function(){
	$('#mobile-closed').click(function() {
	    $("nav.mobile").slideToggle();
	});


	$('#mobile-opentoclose').click(function() {
	    $('nav.mobile').slideUp();
	});

  $('nav.mobile a').on('click', function(){
          $("nav.mobile").slideUp();
      });

});

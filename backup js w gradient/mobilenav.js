$(document).ready(function(){
	$('#mobile-menu-launch').click(function() {
	    $("nav.mobile").slideToggle();
	});

	$('#mobile-opentoclose').click(function() {
	    $('nav.mobile').slideUp();
	});

});

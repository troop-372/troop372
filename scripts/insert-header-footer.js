$(document).ready(function(){
	$(".button-collapse").sideNav();

	//shadow for flaoting navbar on mobile
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
	    $(".top").addClass("nav-shadow");
  	} else {
      $(".top").removeClass("nav-shadow");
    }
	});

	//show dropdown content for top navbar
	$(".dropdown").click(function (e) {
    e.stopPropagation();
    $(this).children('.dropdown-content').toggle();
 	});

	//underline current page in navigation
	$(function(){
		$('a').each(function(){
	    if ($(this).prop('href') == window.location.href) {
	      $(this).addClass('current-page'); $(this).parents('li.dropdown').addClass('current-dropdown');
	    }
	  });
	});

});

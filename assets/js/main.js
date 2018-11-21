$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".staff-list").owlCarousel({
		items:4,
		autoplay:false,
		margin:30,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
		
		
	});
	
	
	

    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	
	$(".video-play-btn").magnificPopup({
		type:'video',
	});

	
	
$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});

	/*slick slider*/
	
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  nextArrow: '<i class="fa fa-long-arrow-right"></i>',
  prevArrow: '<i class="fa fa-long-arrow-left"></i>',
});
				
	
	
}(jQuery));
$(window).on("load", function() {

	$(".section-second .slider").slick({
		"arrows": false,
		"dots": true,
		"dotsClass": "dots",
		"draggable": false,
		"easing": "ease",
		"infinite": false,
		"slide": ".section-second .slider .slide",
		"appendDots": $(".section-second .slider-dots"),
	});

});
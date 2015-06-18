(function() {
 "use strict";



}());

$(function() {
 "use strict";

var $doc = $(document),
	$window = $(window),
	//homepage = $("body").hasClass("homepage"),
	mobile = false;
	//ajaxSupported = false;

if ($doc.width() <= 768) {
	mobile = true;
}

//
// mobile menu
//
(function() {
	var $opener = $(".menuOpener"),
		$menu = $(".pageMenu"),
		wasMobile = false;
	
	$window.resize(function() {
		if ($doc.width() <= 768) {
			mobile = true;
		} else {
			mobile = false;
		}
		
		if (mobile !== wasMobile) {
			if (mobile) {
				$menu.hide();
			} else {
				$menu.show();
			}
			
			wasMobile = mobile;
		}
	});
	
	$opener.click(function() {
		if ($menu.is(":visible")) {
			$menu.slideUp(200);
		} else {
			$menu.slideDown(200);
		}
	});
}());

//
// owl carousel
//
(function() {
	$(".horseDetail .photos").owlCarousel({
		pagination: false,
		items: 3,
		itemsCustom: [
			[0, 1], [400, 2], [600, 3]
		],
		autoPlay: 5000,
		mouseDrag : false,
		touchDrag : false
	});
}());

});
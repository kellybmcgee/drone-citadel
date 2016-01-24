Template.nav.onRendered(function() {
	$(".menu").on("click", function() {
		$(".center-btn ul").toggleClass("active");
	});

	$(window).scroll(function(){
		 if ($(this).scrollTop() > 667) {
		 	$(".top-nav").css("background", "#5e7a8b");
		 } else {
			$(".top-nav").css("background", "none");
		 }
	});
});
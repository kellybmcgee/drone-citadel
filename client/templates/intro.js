Template.intro.onRendered(function() {
$(".intro-1st-content a").on("click", function(){
		$('html, body').animate({
			scrollTop: $("#intro-2nd").offset().top},
			'slow');
		});
});
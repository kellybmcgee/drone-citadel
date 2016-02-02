Template.intro.onRendered(function() {
$(".intro-1st-content a").on("click", function(){
		$('html, body').animate({
			scrollTop: $("#intro-2nd").offset().top},
			'slow');
		});

 $(window).scroll( function(){
      $('.fade-in').each( function(i) {
         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700);
          }
      });
    });

 $(".hiw").on("click", function(){
		$('html, body').animate({
			scrollTop: $("#intro-3rd").offset().top},
			'slow');
		});
});
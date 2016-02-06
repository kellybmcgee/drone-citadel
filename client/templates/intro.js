Template.intro.onRendered(function() {
$(".intro-1st-content a").on("click", function(){
		$('html, body').animate({
			scrollTop: $(".intro-content").offset().top},
			'slow');
		});



  


  $(window).scroll( function(event){
      var y = $(this).scrollTop();
         if( y > 640 ){
            $('.intro-content').removeClass('hidden');
          }


         if( y > 1200 ){
            $('.normal').removeClass('fly-in');
          } 

           if( y > 1800){
            $('.normal2').removeClass('fly-in2');
          } 

           if( y > 2300 ){
            $('.normal3').removeClass('fly-in3');
          } 

          if( y > 2900 ){
            $('.normal4').removeClass('fly-in4');
          } 

    });







 


 $(".hiw").on("click", function(){
		$('html, body').animate({
			scrollTop: $("#intro-3rd").offset().top},
			'slow');
		});
});
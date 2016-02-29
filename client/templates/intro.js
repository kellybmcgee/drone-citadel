Template.intro.onRendered(function() {

  $("li:nth-child(2) a").css("color", "white");
$("li:last-child a").css("color", "white");


  $(window).scroll( function(event){
      var y = $(this).scrollTop();
         if( y > 640 ){
            $('.intro-content1').removeClass('hidden1');
          } else {
              $('.intro-content1').addClass('hidden1');

          }


         if( y > 1200 ){
            $('.normal').removeClass('fly-in');
          } else {
            $('.normal').addClass('fly-in');

          }

           if( y > 2000){
            $('.normal2').removeClass('fly-in2');
          } else {
            $('.normal2').addClass('fly-in2');

          }

           if( y > 2400 ){
            $('.normal3').removeClass('fly-in3');
          } else {
            $('.normal3').addClass('fly-in3');
          }

          if( y > 2900 ){
            $('.normal4').removeClass('fly-in4');
          } else {
            $('.normal4').addClass('fly-in4');
          }

    });


$(".btn-bottom").on("click", function(){
    $('html, body').animate({
      scrollTop: $("#intro-2nd").offset().top},
      'slow');
    });
  



 


 $(".hiw").on("click", function(){
		$('html, body').animate({
			scrollTop: $("#intro-3rd").offset().top},
			'slow');
		});
});
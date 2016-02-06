
    Template.about.onRendered(function() {
    

    $(".bio-wrapper").on("click", function(){
    	$(this).toggleClass("bio");
    });

    $(window).scroll(function(event) {
        var x = $(this).scrollTop();

         if(x > 50) {
          $(".bio-wrapper").removeClass("push");
        }
      });
    
    });


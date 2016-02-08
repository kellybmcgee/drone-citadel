
    Template.about.onRendered(function() {
    


    $(window).scroll(function(event) {
        var x = $(this).scrollTop();

         if(x > 50) {
          $(".bio-wrapper").removeClass("push");
        }
      });

    $(document).on('scroll', function() {
        $(".header-background").toggleClass('scrolling');

    });

    
    });

    



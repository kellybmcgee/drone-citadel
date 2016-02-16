    if(Meteor.isClient) {


 
    

    Template.about.onRendered(function() {
    $('li:last-child a').css('color', 'white');
    $('li:nth-child(2) a').css('color', '#F24236');
    $('li:first-child a').css('color', 'white');


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

    
}


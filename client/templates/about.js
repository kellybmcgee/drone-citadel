Template.about.events({
  'click .white-arrow': function (e) {

    var target = e.currentTarget.nextElementSibling;
    var thisTarget = $(target).attr("id");
    $("#" + thisTarget).toggle(
        function (target) {
          $(this).addClass( "selected" );
    },  function (target) {
          $(this).removeClass( "selected" );
    });
    }
});
    Template.about.onRendered(function() {
      $(".white-arrow").on("click", function() {
          $(this).toggleClass("selected");
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
    });

    // .toggle(
    //     function (target) {
    //       $(this).addClass( "rotateArw" );
    // },  function (target) {
    //       $(this).removeClass( "rotateArw" );
    // });
// function (target) {
//   $("#" + targetArw).css({
//   "transform": "rotate(90deg)",
//   "transition": "transform 1.5s"
//   });
// }, function (target) {
//   $("#" + targetArw).css({
//   "transform": "rotate(-90deg)",
//   "transition": "transform 1.5s"
//   });

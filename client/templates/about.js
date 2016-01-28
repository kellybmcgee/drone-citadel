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
    var targetArw = e.currentTarget.id;
    $("#" + targetArw).css({
      "transform": "rotate(90deg)",
      "transition": "transform 1.5s"
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
  }
});
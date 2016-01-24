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
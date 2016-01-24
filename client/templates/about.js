Template.about.events({
  'click .white-arrow': function (e) {
    console.log("HI");
    $(".bio-wrapper p").css("display", "static");
  }
});
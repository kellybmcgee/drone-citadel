if(Meteor.isClient) {

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
}


Template.nav.onRendered(function() {

    var Menu = {
      
      el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
      },
      
      init: function() {
        Menu.bindUIactions();
      },
      
      bindUIactions: function() {
        Menu.el.ham
            .on(
              'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
          }
        );
      },
      
      activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
      }
    };

    Menu.init();

	$(".menu").on("click", function() {
		$(".center-btn").toggleClass('active');
	});

    $("li a").on("click", function() {
        $(".center-btn").toggleClass('active');
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    });





	$(window).scroll(function(){
		 if ($(this).scrollTop() > 665) {
		 	$(".top-nav").css("background", "white");
            $(".top-nav h1").css("color", "#333333");
            $("li a").css("color","#333333");
            $("#login-buttons a").css("color", "#333333");
            $("#login-sign-in-link").css("border", "2px #333333 solid");
            $("#login-name-link").css("border", "2px #333333 solid");

		 } else {
            $(".top-nav").css("background", "none");
            $(".top-nav h1").css("color", "white");
            $("li a").css("color","white");
            $("#login-buttons a").css("color", "white");
            $("#login-sign-in-link").css("border", "2px white solid");
            $("#login-name-link").css("border", "2px white solid");
		 }
	});

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.top-nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.top-nav').removeClass('nav-down').addClass('nav-up');
        $(".center-btn ul").removeClass('active');
       

    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.top-nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

});
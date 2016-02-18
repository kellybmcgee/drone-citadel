

Router.configure({
  // the default layout
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('intro');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/home', function() {
  this.render('home');
});
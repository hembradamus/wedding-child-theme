jQuery(document).ready(function(){
  jQuery(function ($) {

    var $navbar = $('.navbar');

    $navbar.waypoint(function() {
      console.log('waypoint!');
      //$navbar.addClass('red');
    });


    $('p').click(function(){
      //$navbar.addClass('red');
      //$(this).addClass('red');
      console.log('scripts!');
    });

  });
});

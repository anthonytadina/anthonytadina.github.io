$(document).ready(function(){
  // $('.fade-in').fadeIn(400);
  // $('a').click(function(){
  //   $('.fade-in').fadeOut(400);
  // });

  $('.fade-in').css('display', 'none');
  $('.fade-in').fadeIn(600);
  $('a').click(function() {
    event.preventDefault();
    newLocation = this.href;
    $('.fade-in').fadeOut(600, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
});


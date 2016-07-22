$(document).ready(function() {
  

  $('.collapsed-menu-bar').on('click', function() {
    $('.collapsed-menu').toggle('slow')
  });

  $('.header-content .down-arrow').click(function() {
    $('.header-content').slideUp(500);
    $('.portfolio').slideDown(2500);
  });

  $('.portfolio .up-arrow').click(function() {
    $('.portfolio').slideUp(500);
    $('.header-content').slideDown(2500);
  });

  $('.portfolio .down-arrow').click(function() {
    $('.portfolio').slideUp('slow');
    $('.about').slideDown('1000');
  });
  
});
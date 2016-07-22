$(document).ready(function() {
/*
  $(window).scroll(function() {
    $('.portfolio').css('display', 'block');
    $('.about').css('display', 'block');
    $('.contact').css('display', 'block');

  });
*/
  $('.collapsed-menu-bar').on('click', function() {
    $('.collapsed-menu').toggle('slow')
  });

  $('.header-content .down-arrow').click(function() {
    $('.header-content').slideUp('slow', function() {
      $('.portfolio').slideDown('slow');
    });
    
  });

  $('.portfolio .up-arrow').click(function() {
    $('.portfolio').slideUp('slow', function() {
      $('.header-content').slideDown('slow');
    });
    
  });

  $('.portfolio .down-arrow').click(function() {
    $('.portfolio').slideUp('slow', function() {
      $('.about').slideDown('1000');
    });
  });

  $('.about .up-arrow').click(function() {
    $('.about').slideUp('slow', function() {
      $('.portfolio').slideDown('slow');
    });
  });

  $('.about .down-arrow').click(function() {
    $('.about').slideUp('slow', function() {
      $('.contact').slideDown('slow');
    });
  });

  $('.contact .up-arrow').click(function() {
    $('.contact').slideUp('slow', function() {
      $('.about').slideDown('slow');
    });
  });

  
  
});
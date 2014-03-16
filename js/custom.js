$(document).ready(function(){
  $('.tab-1-button').on('click', function(){
      $('.tab-1').show();
      $('.tab-2').hide();
      $('.tab-3').hide();
    });
  $('.tab-2-button').on('click', function(){
      $('.tab-2').show();
      $('.tab-1').hide();
      $('.tab-3').hide();
    });
  $('.tab-3-button').on('click', function(){
      $('.tab-3').show();
      $('.tab-1').hide();
      $('.tab-2').hide();
    });
});
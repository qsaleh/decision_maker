/* eslint-disable no-undef */
$(document).ready(function() {
  $('header').hide();
  $('nav').hide();

  $('.button').click(function() {
    sendEmailsToUserThroughMailgunAPI();
    $('nav').slideDown();
    $('header').slideDown();
    $('.poll').hide();
    $('.afterSubmission').show();
    setTimeout(() => {
      window.location = 'http://localhost:8080/';

    }, 2000);
  });

});

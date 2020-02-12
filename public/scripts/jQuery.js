/* eslint-disable no-undef */
$(document).ready(function() {
  $('header').hide();
  $('nav').hide();

<<<<<<< HEAD
  // $('.button').click(function() {
  //   sendEmailsToUserThroughMailgunAPI();
  //   $('nav').slideDown();
  //   $('header').slideDown();
  //   $('.pollContainer').hide();
  //   $('.afterSubmission').show();
  //   setTimeout(() => {
  //     window.location = 'http://localhost:8080/';
=======
  $('.button').click(function() {
    $('nav').slideDown();
    $('header').slideDown();
    $('.pollContainer').hide();
    $('.afterSubmission').show();
    setTimeout(() => {
      window.location = 'http://localhost:8080/';
>>>>>>> 9829b204496967de29424bdd3169e1b8f71d9af3

  //   }, 2000);
  // });

});

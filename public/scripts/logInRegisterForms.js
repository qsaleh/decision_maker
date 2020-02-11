$(document).ready(function () {
$('.form-popupLogin').hide();
$('.form-popupRegister').hide();
$('#loginBtn').click(function() {
  $('.form-popupLogin').show();
  $('#loginBtn').hide();
})

$('#cancel').click(function() {
  $('.form-popupLogin').hide();
  $('#loginBtn').show();
})

// SUBMIT TO THE DBBBBB
$('#registerBtn').click(function() {
  $('.form-popupRegister').show();
  $('#registerBtn').hide();
})

$('#cancelReg').click(function() {
  $('.form-popupRegister').hide();
  $('#registerBtn').show();
})


});

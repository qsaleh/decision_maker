
$(document).ready(function() {
  $('header').hide();
  $('nav').hide();
$('.allOptions').sortable({
    update: function() {
      let dataToSend = $(this).sortable("serialize");
      $.ajax({
        method: "GET",
        dataType: "JSON",
        url: '/',
        data: dataToSend,
      });
    }
  });

  $('.button').click(function() {
    $('nav').slideDown();
    $('header').slideDown();
    $('.poll').hide();
    $('.afterSubmission').show();
    setTimeout(() => {
      window.location = 'http://localhost:8080/'

    }, 2000)
  });

});

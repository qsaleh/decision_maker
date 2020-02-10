
$(document).ready(function() {
  $('header').hide();
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
    $('header').slideDown();
    $('.poll').hide();
    $('.afterSubmission').show();
  })

});


$(document).ready(function() {

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
});

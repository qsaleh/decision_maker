/* eslint-disable no-undef */
$(document).ready(function() {
  $('#alloptions').sortable({
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
  
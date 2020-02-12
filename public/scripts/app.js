/* eslint-disable no-undef */

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/fake-data",
    success: function(results) {
      $('.poll').empty();
      $('.poll').prepend(`<p id='pollTitle'>${results[0]["question"]}</p>
      <div id='alloptions'>`);
      for (const choice of results) {
        $('#alloptions').append(
          `
          <div class='option'>
            <li id='option_${choice['option_id']}'>${choice['option']}</li>
          </div>
          `
        );
      }
    }
  })
    .then(() => {
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
  
});

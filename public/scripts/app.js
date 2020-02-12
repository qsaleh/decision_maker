/* eslint-disable no-undef */
let resultsArray = [];
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/fake-data",
    success: function(results) {
      $('.poll').empty();
      $('.poll').prepend(`<div id='pollTitle'><b>${results[0]["question"]}</b></div>
      <ul id='allOptions'>`);
      resultsArray = results;
      for(const choice of results) {
        console.log(choice);
        $('#allOptions').append(
          `
            <li class='option' data-name= '${choice['option']}' id='option_${choice['option_id']}'>${choice['option']}</li>
          `
        );
      }
    }
  })
    .then(() => {


      $('#allOptions').sortable({
        start: function(event, ui) {
          $(this).attr('dataPreviousIndex', ui.item.index());
        },
        update: function(event, ui) {
         const newIndex = ui.item.index();
          const oldIndex = $(this).attr('dataPreviousIndex');
          console.log('new', newIndex);
          console.log('old', oldIndex);

          let swapped = resultsArray[newIndex];
          resultsArray[newIndex] = resultsArray[oldIndex];
          resultsArray[oldIndex] = swapped;
          console.log(resultsArray);

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




$('.button').click(function() {
  // event.preventDefault();
  $('nav').slideDown();
  $('header').slideDown();
  $('.pollContainer').hide();
  $('.afterSubmission').show();
//POST REQUEST

    $.post("/api/selection/selection",
    {
      data: resultsArray
    }
    );



    setTimeout(() => {
      window.location = 'http://localhost:8080/';

    }, 2000);
  });


});

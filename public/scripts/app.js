let resultsArray = [];
$(() => {
  console.log(window.location.href, "href frm get fake-data")
  const idSlices = window.location.href.split('/')
  console.log(idSlices[idSlices.length-1], 'id')
  $.ajax({
    method: "GET",
    url: `/api/fake-data/${idSlices[idSlices.length-1]}`,
    success: function(results) {
      $('.poll').empty();
      console.log('here');
      $('.poll').prepend(`<div id='pollTitle'><b>${results[0]["question"]}</b></div>
      <ul id='allOptions'>`);
      resultsArray = results;
      for (const choice of results) {
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
          console.log('old', oldIndex);
          console.log('new', newIndex);
          let swapped = resultsArray[oldIndex];
          resultsArray[oldIndex] = resultsArray[newIndex];
          resultsArray[newIndex] = swapped;
          console.log('oldArray', resultsArray[oldIndex], 'newArray', resultsArray[newIndex], 'Array', resultsArray);
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
      window.location = 'https://fathomless-dusk-70706.herokuapp.com/';
    }, 2000);
  });
});

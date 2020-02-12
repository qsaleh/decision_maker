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
<<<<<<< HEAD
      for(const choice of results) {
        $('#allOptions').append(
=======
      for (const choice of results) {
<<<<<<< HEAD
        $('#allOptions').append(
=======
        $('#alloptions').append(
>>>>>>> 9829b204496967de29424bdd3169e1b8f71d9af3
>>>>>>> master
          `
            <li class='option' data-name= '${choice['option']}' id='option_${choice['option_id']}'>${choice['option']}</li>
          `
        );
      }
    }
  })
    .then(() => {
<<<<<<< HEAD


=======
>>>>>>> master
      $('#allOptions').sortable({
        start: function(event, ui) {
          $(this).attr('dataPreviousIndex', ui.item.index());
        },
        update: function(event, ui) {
<<<<<<< HEAD
         const newIndex = ui.item.index();
          const oldIndex = $(this).attr('dataPreviousIndex');
          console.log('old', oldIndex);
          console.log('new', newIndex);

=======
          const newIndex = ui.item.index();
          const oldIndex = $(this).attr('dataPreviousIndex');
          console.log('old', oldIndex);
          console.log('new', newIndex);
>>>>>>> master
          let swapped = resultsArray[oldIndex];
          resultsArray[oldIndex] = resultsArray[newIndex];
          resultsArray[newIndex] = swapped;
          console.log('oldArray', resultsArray[oldIndex], 'newArray', resultsArray[newIndex], 'Array', resultsArray);
<<<<<<< HEAD


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


=======
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
>>>>>>> master
});


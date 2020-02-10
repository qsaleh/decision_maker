//This file refreshes the main page using AJAX
//and brings the user into the poll creation page
$(document).ready(function() {
//Hiding the submission fields until click
$('.userSubmissionForm').hide();
      $('.textForm').hide();
      $('.submit').hide();
      $('.cancel').hide();
      $('.afterSubmission').hide();



  $('.getYoVerdict').click(function() {
      $('header').slideUp();
      //Expanding input box on click
      $('.userSubmissionForm').show();
      $('.textForm').show();
      $('#submitAll').show();
      $('.allPrevCharts').hide();
  });


  //Here we are going to make the header disappear

  $('#title').click(function() {
    $(this).css('width','500px');

      $('#cancelTitle').show();
  })

  $('#description').click(function() {
    $(this).css('width','500px');

      $('#cancelDesc').show();
  })

  $('#newItem').click(function() {
    $(this).css('width','500px');

      $('#cancelItem').show();
  })
//HOW CAN YOU SUBMIT DATA BY PRESSING ENTER?
  // $('.submit').click(function() {
  //     event.preventDefault();
  //   //Send AJAX request to DB
  // });

  // $('.submit').click(function() {
  //     event.preventDefault();
  //   //Send AJAX request to DB
  // });

//When submitting a new ITEM add an extra step where a new
//form box is inserted asking if they want to add another item
  // $('.submit').click(function() {
  //     event.preventDefault();
  //   //Send AJAX request to DB
  // });

  $('#cancelTitle').click(function() {
    $('#title').css('width','auto');
    $('#submitTitle').hide();
    $('#cancelTitle').hide();
  });

  $('#cancelDesc').click(function() {
    $('#description').css('width','auto');
    $('#submitDesc').hide();
    $('#cancelDesc').hide();
  });

  $('#cancelItem').click(function() {
    $('#newItem').css('width','auto');
    $('#submitItem').hide();
    $('#cancelItem').hide();
  });

  $('#submitAll').click(function() {
    event.preventDefault();
    $('.userSubmissionForm').hide();
    $('header').slideDown().animate({height: "400px"}, 500);
    $('.afterSubmission').show();
    $('.allPrevCharts').show();

  })

});



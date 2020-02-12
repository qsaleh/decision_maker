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
      $('#newItem2').hide();
      $('#newItem3').hide();
      $('#newItem4').hide();
      $('#newItem5').hide();
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

  $('#newItem1').click(function() {
    $(this).css('width','500px');
      $('#cancelItem1').show();
      $('#newItem2').show();

  })

  $('#newItem2').click(function() {
    $(this).css('width','500px');
      $('#cancelItem2').show();
      $('#newItem3').show();
  })

  $('#newItem3').click(function() {
    $(this).css('width','500px');
      $('#cancelItem3').show();
      $('#newItem4').show();
  })

  $('#newItem4').click(function() {
    $(this).css('width','500px');
      $('#cancelItem4').show();
      $('#newItem5').show();
  })

  $('#newItem5').click(function() {
    $(this).css('width','500px');
      $('#cancelItem5').show();

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

  $('#cancelItem1').click(function() {
    $('#newItem1').css('width','auto');
    $('#newItem2').hide();
    $('#submitItem').hide();
    $('#cancelItem1').hide();
  });

  $('#cancelItem2').click(function() {
    $('#newItem2').css('width','auto');
    $('#newItem3').hide();
    $('#submitItem').hide();
    $('#cancelItem2').hide();
  });

  $('#cancelItem3').click(function() {
    $('#newItem3').css('width','auto');
    $('#newItem4').hide();
    $('#submitItem').hide();
    $('#cancelItem3').hide();
  });

  $('#cancelItem4').click(function() {
    $('#newItem4').css('width','auto');
    $('#newItem5').hide();
    $('#submitItem').hide();
    $('#cancelItem4').hide();
  });

  $('#cancelItem5').click(function() {
    $('#newItem5').css('width','auto');
    $('#submitItem').hide();
    $('#cancelItem5').hide();
  });

<<<<<<< HEAD
  // $('#submitAll').click(function() {
  //   event.preventDefault();
=======
  // $('#submitAll').click(function(e) {
  //   e.preventDefault();
  //   // sendEmailsToUserThroughMailgunAPI();
>>>>>>> 9829b204496967de29424bdd3169e1b8f71d9af3
  //   $('.userSubmissionForm').hide();
  //   $('header').slideDown().animate({height: "400px"}, 500);
  //   $('.afterSubmission').show();
  //   $('.allPrevCharts').show();
<<<<<<< HEAD
=======

  // })

  });
>>>>>>> 9829b204496967de29424bdd3169e1b8f71d9af3

  // })

});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

jQuery(function($) {

  $(document).ready(function(){
    $('#user-login').on('submit', function (event){
      event.preventDefault();
      const data = $(this).serialize();
      $.ajax({
        url: '/login',
        method: 'POST',
        data,
        success: (data) => {

            alert('success!');
        },
        error: (error) => {
            console.log('this request failed and this was the error', error);
        }
      });
    })



  })

});

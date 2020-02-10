/* eslint-disable no-undef */
$(() => {
  const getPollOptions = function() {  // eventually, this function should take user_id as a parameter
    const queryString = `
    SELECT *
    FROM polls
    JOIN options
    ON options.poll_id = polls.id
    ;
    `;
    return pool.query(queryString)
      .then(res => {
        const options = res.rows[0];
        return options;
      });
  };
  
  const addPollOptions = function(databaseObject) {
    databaseObject = getPollOptions();
    // add description if needed, after the poll title
    const markup =  `
    <p id='pollTitle'>Poll Title</p>
    <div id='alloptions'>
      <div class='option'>
        <li id='option_1'>option1</li>
      </div>
      <div class='option'>
        <li id='option_2'>option2</li>
      </div>
      <div class='option'>
        <li id='option_3'>option3</li>
      </div>
      <div class='option'>
        <li id='option_4'>option4</ali>
      </div>
      <div class='option'>
        <li id='option_5'>option5</li>
      </div>
    </div>
    `;
    return $('.poll').append(markup);
    
  };
  const displayPollOptions = function() {
    $.ajax({
      method: "GET",
      url: '/',
      success: function(htmlMarkup) {
        addPollOptions(htmlMarkup);
      }
    });
  };
  displayPollOptions();

});


$(() => {
  console.log('FROM results.js');
  $.ajax({
    method: "GET",
    url: "/results",
    success: function(results) {
      // $('.poll').empty();
      // console.log('RESULTS', results);
      $('.chart1').prepend(`

      <svg class="chart" id='chartResults' width="420" height="150" aria-labelledby="title desc" role="img">
      <g class="bar1">
        <rect width="40" height="19"></rect>
        <text x="45" y="9.5" dy=".35em">${results[0]}</text>
      </g>
      <g class="bar1">
        <rect width="80" height="19" y="20"></rect>
        <text x="85" y="28" dy=".35em">${results[1]}</text>
      </g>
      <g class="bar1">
        <rect width="150" height="19" y="40"></rect>
        <text x="150" y="48" dy=".35em">${results[2]}</text>
      </g>
      <g class="bar1">
        <rect width="160" height="19" y="60"></rect>
        <text x="161" y="68" dy=".35em">${results[3]}</text>
      </g>
      <g class="bar1">
        <rect width="230" height="19" y="80"></rect>
        <text x="235" y="88" dy=".35em">${results[4]}</text>
      </g>
    </svg>
      `);

    }
  })


});

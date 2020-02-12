//create a function that will take in an object of a MAX of 5 options
//that have been assigned a rank to them. Use the rank to determine the
//score for each and output object of results

const scoringOptions = (object) => {
//Use a for loop to loop through the keys & to access the values
//Create a variable that will get the # of keys in the object that will = n
//As you loop through add conditions
// if(rank = 1) then score = n
//if(rank = 2) then score = n-1
//if(rank = 3) then score = n-2
//if(rank = 4) then score = n-3
//if(rank = 5) then score = n-4

  const size = Object.keys(object).length;
  const results = {};
  console.log('inside Function: SIZE of Object ', size);
  for (const key in object) {
    switch (object[key]) {
    case '1':
      results[key] = size;
      break;
    case '2':
      results[key] = size - 1;
      break;
    case '3':
      results[key] = size - 2;
      break;
    case '4':
      results[key] = size - 3;
      break;
    case '5':
      results[key] = size - 4;
      break;
    }
  }
  return results;
};

module.exports = {
  scoringOptions
};

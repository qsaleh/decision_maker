//This function is going to take the OBJECT of scores that the scoringOption
//function returns & will update the DB under final_rank/final_score
//INPUT: OBJECT that has been recently scored && OBJECT from db that has already been scored
//OUTPUT: OBJECT

const finalScore = (objNew, objOld) => {
//Loop through either object (since they are going to have the same length)
//create an updated object
//IF key1 === key2 then add the values and put them into the new object
//else keep looping
//after loop is done, return the new object

  const updatedScore = {};

  for (const key1 in objNew) {
    for (const key2 in objOld) {
      if(!objOld[key2]){
        objOld[key2] = 0;
      }
      if (key1 === key2) {

        updatedScore[key1] = parseInt(objNew[key1]) + parseInt(objOld[key2]);
      }
  }
  }

  return updatedScore;

};

// const obA = {
//   a: 1,
//   b: 2
// }
// const obB = {
//   b: null,
//   a: null
// }

// console.log(finalScore(obA,obB));



module.exports = {
  finalScore
};


const express = require('express');
const app = express();
const router  = express.Router();
const bodyParser = require("body-parser");
const {scoringOptions}  = require('../public/scripts/scoringOptions.js');
const sendEmailToUser = require('./sendgrid');
const {finalScore} = require('../public/scripts/finalScores.js');

module.exports = (db) => {

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

    router.post("/:id", (req, res) => {
      console.log("This is req in selection.js",req);
      const setData = [];

      for(const key in req.body) {

       for(const key2 in req.body[key]) {
        //  console.log(key2);
         for(const key3 in req.body[key][key2]) {
            setData.push(req.body[key][key2]['option']);
         }
       }

      }

      const data = Array.from(new Set(setData));


     //ADDING IT TO THE DATABASE!

     const objData = {};
      data.forEach((data, index) => {

        objData[`${data}`] = `${index + 1}`;

        db.query(`UPDATE options
        SET rank = ${index + 1}
        WHERE option = '${data}';
        `)

        .then (res => {
          console.log('success');

        })
        .catch(err => {
          console.log(err);
        });
    });

    const scores = scoringOptions(objData);

    db.query(`
    SELECT email FROM users
    JOIN polls ON users.id = polls.user_id
    WHERE polls.id = ${req.params.id};`)
    .then (email => {
      sendEmailToUser(email, req.params.id);
    })



      db.query(`
      SELECT option, final_rank FROM final_ranks
      WHERE poll_id = ${req.params.id};`)
      .then (res => {
        const dbObject = {};
        for ( let i = 0 ; i < res.rows.length; i++){
        dbObject[res.rows[i].option] = res.rows[i].final_rank;
        }
        return finalScore(scores, dbObject);
  })
  .then(result => {
    for(const option in result) {
      db.query(`
      UPDATE final_ranks
      SET final_rank = ${result[option]}
      WHERE option = '${option}';
      `)
      .then (res => {
        console.log('success');

      })
      .catch(err => {
        console.log(err);
      });


    }


    });
  });

  return router;


    };

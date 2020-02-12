const express = require('express');
const app = express();
const router  = express.Router();
const bodyParser = require("body-parser");
const { scoringOptions }  = require('../public/scripts/scoringOptions.js');
const sendEmailToUser = require('./sendgrid');
module.exports = (db) => {

  app.set("view engine", "ejs");
  app.use(bodyParser.urlencoded({ extended: true }));
  router.post("/selection", (req, res) => {
    const setData = [];

    for (const key in req.body) {

      for (const key2 in req.body[key]) {
      //  console.log(key2);
        for (const key3 in req.body[key][key2]) {
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

        .then(res => {
          console.log('success');

        })
        .catch(err => {
          console.log(err);
        });
    });

    const scores = scoringOptions(objData);
    sendEmailToUser('olivefan92@gmail.com');
  });

  return router;
};
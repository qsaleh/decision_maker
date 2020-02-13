/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router  = express.Router();
// const randomID = require('../public/scripts/randomID');

module.exports = (db) => {

  app.set("view engine", "ejs");
  app.use(bodyParser.urlencoded({ extended: true }));

  router.post("/submit", (req, res) => {
    console.log("req.body", req.body);

    const valuesPolls = [req.body.text, req.body.description];

    const queryStringPolls = `
    INSERT INTO polls (user_id, question, description, date_created)
    VALUES (1, $1, $2, Now())
    RETURNING *
    `;
    const valuesOptions =
    [req.body.AddItem[0], req.body.AddItem[1], req.body.AddItem[2], req.body.AddItem[3], req.body.AddItem[4]].filter(Boolean);
    const valuesLength = valuesOptions.length;
    let values = ``;
    // const voterID = randomID();
    for (let i = 0; i < valuesLength; i++) {
      values += `(`;
      values += `'${valuesOptions[i]}'`;
      if (i < valuesLength - 1) {
        values += `),\n`;
      } else {
        values += `)`;
      }
    }

      db.query(`
      SELECT id FROM users
      WHERE email = '${req.session.email}'
      `)
        .then(res => {
        const user = res.rows[0];
        return user;
        })
        .then(response => {

          db.query(`
          INSERT INTO polls (user_id, question, description, date_created)
          VALUES (${response.id}, $1, $2, Now())
          RETURNING *
          `, valuesPolls)
            .then(res2 => {
              const poll = res2.rows[0];
              console.log('poll', poll);
              return poll;
            })
            .then(response => {  // response i am getting is poll table or object
              // get the id from polls
              let values = ``;
              for (let i = 0; i < valuesLength; i++) {
                values += `(`;
                values += `${response.id}, '${valuesOptions[i]}'`;
                if (i < valuesLength - 1) {
                  values += `),\n`;
                } else {
                  values += `)`;
                }
              }
              console.log("values", values);
              console.log("response.id", response.id);
              db.query(`
              INSERT INTO options (poll_id, option)
              VALUES ${values};
              INSERT INTO final_ranks (poll_id, option)
              VALUES ${values};
              `)
                .then(result => {
                  const option = result.rows[0];
                  console.log("option", option);
                  res.send('submitted successfully');
                });
            });

        })

    });

  return router;
};

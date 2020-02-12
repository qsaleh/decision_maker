/*
 * All routes for fake-data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => { // use cookies to specify the user
    db.query(`SELECT user_id, poll_id, question, date_created, options.id AS option_id, option, rank
    FROM polls
    JOIN options
    ON options.poll_id = polls.id
    ORDER BY option_id
    ;`)
      .then(data => {
        const polls = data.rows;
        res.json(polls);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
  
};

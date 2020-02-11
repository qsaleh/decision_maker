/*
 * All routes for fake-data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
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
  router.post("/", (req, res) => {
    const valuesPolls = [req.title, req.description];
    const valuesOptions = [req.item1, req.item2, req.item3, req.item4, req.item5];
    const queryStringPolls = `
    INSERT INTO polls (question, description)
    VALUES ($1, $2)
    RETURNING *
    `;
    const queryStringOptions = `
    INSERT INTO options (option)
    VALUES ($3)
    RETURNING *
    `;

    return db.query(queryStringPolls, valuesPolls)
      .then(res => {
      const user = res.rows[0][/*access last key*/];
        // const items = [req.item1, req.item2, req.item3, req.item].filter(Boolean)
        // items.forEach(item => addOptionToPoll(pollId, item))
        
      })
      .then(res => {
      db.query(queryStringPolls, valuesPolls)
      .then(res => {
      const user = res.rows[0][/*access last key*/];
      res.send('submitted successfully');
      }

      );
  });
  return router;
  
};

const express = require('express');
const app = express();
const router  = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const poolId = require('../server');

module.exports = (db) => {
  console.log('resultsroute');
  app.use(
    cookieSession({
      name: "session",
      keys: ["minty"],
    })
  );

  app.set("view engine", "ejs");
  app.use(bodyParser.urlencoded({ extended: true }));
  router.get(`/${poolId.pollId}`, (req, res) => {
    db.query(`SELECT option, final_rank FROM final_ranks
    WHERE poll_id = ${poolId.pollId}
    ORDER BY final_rank
    ;`)
      .then(data => {
        const finalRank = data.rows;

        res.json(finalRank);
        console.log('final_rank res.json', res.json(finalRank));
        // res.json(final_rank);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  return router;
};

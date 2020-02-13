const express = require('express');
const app = express();
const router  = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const poolId = require('../server');

module.exports = (db) => {

  app.use(
    cookieSession({
      name: "session",
      keys: ["minty"],
    })
  );

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
    router.get("/results", (req, res) => {
      db.query(`SELECT option, final_rank FROM final_ranks

      ORDER BY final_rank
      ;`)
        .then(data => {
          const final_rank = data.rows;

          res.json(final_rank);
          console.log('final_rank res.json', res.json(final_rank))
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

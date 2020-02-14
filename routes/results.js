const express = require('express');
const app = express();
const router  = express.Router();
const bodyParser = require("body-parser");
const poolId = require('../server');
module.exports = (db) => {

<<<<<<< HEAD
  app.use(
    cookieSession({
      name: "session",
      keys: ["minty"],
    })
  );

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
    router.get("/results/:id", (req, res) => {
      console.log("HERE");

      db.query(`SELECT option, final_rank FROM final_ranks
      ORDER BY final_rank
      ;`)
        .then(data => {
          const final_rank = data.rows;
          res.json(final_rank);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
=======
  app.set("view engine", "ejs");
  app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 7999ebc3ec1e635645a56148860ed577edf595ed

  router.get("/:id", (req, res) => {
    console.log('accessed results');
    db.query(`SELECT option, final_rank FROM final_ranks
    WHERE poll_id = ${poolId.pollId}
    ORDER BY final_rank
    ;`)
      .then(data => {
        const finalRank = data.rows;
        let optionsRank = [];
        for (let i = 0; i < finalRank.length; i++) {
          optionsRank.push(finalRank[i]["option"]);
        }
        console.log('option RANK: ',optionsRank);
        res.json(optionsRank);
        // res.json(final_rank);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    console.log('accessed results');
    db.query(`SELECT option, final_rank FROM final_ranks
    WHERE poll_id = ${poolId.pollId}
    ORDER BY final_rank
    ;`)
      .then(data => {
        const finalRank = data.rows;
        let optionsRank = [];
        for (let i = 0; i < finalRank.length; i++) {
          optionsRank.push(finalRank[i]["option"]);
        }
        console.log('option RANK: ',optionsRank);
        res.json(optionsRank);
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

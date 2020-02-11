/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const app = express();
const router  = express.Router();
const bodyParser = require("body-parser");


module.exports = (db) => {
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.psw;
    res.redirect("/");
  });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.psw;
    res.redirect("/");
  });

  return router;
};



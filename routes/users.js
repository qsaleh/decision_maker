/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const app = express();
const router  = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");


module.exports = (db) => {

  app.use(
    cookieSession({
      name: "session",
      keys: ["minty"],
    })
  );

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
    const hashedPassword = bcrypt.hashSync(password, 10);
    req.session.email = email;
    req.session.password = hashedPassword;
    res.redirect("/");

  });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.psw;
    const hashedPassword = bcrypt.hashSync(password, 10);
    res.redirect("/");
  });

  return router;
};



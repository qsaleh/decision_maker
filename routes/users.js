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

  const addUser =  function(email, password) {
    return db.query(`
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
    `, [email, password])
    .then(res => res.rows[0])
  }

  router.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.psw;
    const hashedPassword = bcrypt.hashSync(password, 10);
    addUser(email, hashedPassword)
      .then(email => {
        req.session.email = email;
        res.redirect("/");
      })
      .catch(e => res.send(e));
    });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.psw;
    const hashedPassword = bcrypt.hashSync(password, 10);
    res.redirect("/");
  });

  router.post('/logout', (req, res) => {
    req.session.email = null;
    res.redirect("/");
  });

  return router;
};



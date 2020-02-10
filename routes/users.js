/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const app = express();

module.exports = (db) => {
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
  return router;
};
// users database used for testing. Should be deleted once SQL DB is finalized.
let users = {
  qusai: {
    id: "qusai",
    email: "qmsaleh@gmail.com",
    password: "hello"
  },
  ahmed: {
    id: "ahmed",
    email: "ahmed@gmail.com",
    password: "password"
  }
}


app.get("/login", (req, res) => {
  const templateVars = { username: req.session.userId };
  res.render("login", templateVars);
});

app.post("/login", (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];
  if (!lookUpUserByEmail(email, users)) {
    res.sendStatus(403);
  } else if (
    !bcrypt.compareSync(
      password,
      lookUpUserByEmail(email, users).hashedPassword
    )
  ) {
    res.sendStatus(403);
  } else {
    req.session.userId = lookUpUserByEmail(email, users).email;
    res.redirect("/urls");
  }
});

function lookUpUserByEmail(emailInput, database){
  const obj = Object.values(database);
  for (let user of obj) {
    if (user.email === emailInput) {
      return user;
    }
  }
}



const express = require('express');
const router = express.Router();
var fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
var users = [];

// router.get('/', async (req, res, next) => {

//     var content = fs.readFileSync('user.txt','utf8');
//     console.log(content);
//       res.send(content);
//   });

db = new sqlite3.Database('./task.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the task.db SQlite database.');
});

let sql = `SELECT * FROM users`;

router.post('/', async (req, res) => {

  db.all(sql, [] , (err, row) => {

    if (err) {
      throw err;
    }
    // router.get('/', async (req, res) => {
    //   await res.send(row);
    // });
    users = row;
    console.log(users);
  });
  users.forEach(u => {
    if(u.username == req.body.username && u.password == req.body.password)
    res.send('logged in');
  });

});
module.exports = router;
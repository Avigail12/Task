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

db.all(sql, [] , (err, row) => {

  if (err) {
    throw err;
  }
  // router.get('/', async (req, res) => {
  //   await res.send(row);
  // });
  users = row;
  // console.log(users);
});
router.post('/login', async (req, res) => {

  // request(
  //   { url: 'http://localhost:5000/api/auth/login' },
  //   (error, response, body) => {
  //     if (error || response.statusCode !== 200) {
  //       return res.status(500).json({ type: 'error', message: err.message });
  //     }
     console.log(users);
      res.send(users.find(u => u.username == req.body.username && u.password == req.body.password));
  //   }
  // )
});

router.post('/register', async (req, res) => {
  
  await db.run("INSERT INTO users(username,password) VALUES('"+req.body.username+"','"+req.body.password+"')", function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
});

module.exports = router;
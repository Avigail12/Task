const express = require('express');
const router = express.Router();

const Task = require('../models/Task');
// const sql = require('mssql');
var fs = require('fs');
const sqlite = require('../connection');


// const config = {
//     user: 'appuser',
//     password: 'password',
//     server: '(local)\\sqlexpress', 
//     database: 'task'
// };

///עבודה עם קבצים
// router.get('/', async (req, res, next) => {
  
//     var content = fs.readFileSync('task.txt','utf8');
//       res.send(content);
//   });

//   router.post('/', async (req, res) => {

//     fs.appendFileSync('task.txt', JSON.stringify(req.body), function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });
  
// });

///עבודה עם sqlite

const sqlite3 = require('sqlite3').verbose();
var tasks=[];
 //tasksById = new Task();
 var tasksById = [];

// db = new sqlite3.Database('./task.db', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the task.db SQlite database.');
//   });

db = sqlite.db;

let sql = `SELECT * FROM tasks`;

db.all(sql, [] , (err, row) => {

  if (err) {
    throw err;
  }
  tasks = row;
  router.get('/', async (req, res) => {
    await res.send(row);
  });
 /// get tasks of usere
  router.get('/users/:id', async (req, res) => {
    
    var tasksById = tasks.find(t => t.userid == req.params.id);
    res.send(tasksById);
  });

  router.get('/:id', async (req, res) => {
    
    var tasksById = tasks.find(t => t.id == req.params.id);
    // console.log(tasksById);
    res.send(tasksById);
  });

});

router.post('/', async (req, res) => {
  
  await db.run("INSERT INTO tasks(name,description,dueDate,userid) VALUES('"+req.body.name+"','"+req.body.description+"','"+req.body.dueDate+"','"+req.body.userid+"')", function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.send(req.body);
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
});

router.put('/', async (req, res) => {

  let sqlPut = "UPDATE tasks SET name = '"+req.body.name+"',description = '"+req.body.description+"', dueDate = '"+req.body.dueDate+"' WHERE id ='"+req.body.id+"' ";

await db.run(sqlPut, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) updated: ${this.changes}`);

});
await sqlite.db.close();
await res.end( "updated customer");

});

router.delete('/:id', async (req, res) => {

 await db.run("DELETE FROM tasks WHERE rowid='"+req.params.id+"'", function(err) {
    if (err) {
      return console.error(err.message);
    }
    // 
    console.log(`Row(s) deleted ${this.changes}`);
  });

  await res.end( "Deleted customer");
  await sqlite.db.close();
});


// const { exec } = require("child_process");

// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

// users.forEach(u => {console.log(u)});

 

//  router.post('/', async (req, res) => {

//  })
module.exports = router;
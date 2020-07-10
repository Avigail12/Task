const express = require('express');
const router = express.Router();

const task = require('../models/Task');
const app = require('../app');
const sql = require('mssql');
var fs = require('fs');
const config = {
    user: 'appuser',
    password: 'password',
    server: '(local)\\sqlexpress', 
    database: 'task'
};

router.get('/', async (req, res, next) => {
  
    var content = fs.readFileSync('task.txt','utf8');
      res.send(content);
  });

  router.post('/', async (req, res) => {
    fs.appendFile('task.txt', req.body, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  
});
// router.get('/', async (req, res) => {

//     const connection = new sql.ConnectionPool(config);
//     const request = new sql.Request(connection);
//     request.query('select * from tasks', function (err, recordset) {
            
//         if (err) console.log(err)

//         // send records as a response
//         console.log(recordset);
//         res.send(recordset);

//         connection.close();
        
//     });
// });

// router.post('/', async(req, res) => {
//     const task = new Task({  
//         name: req.body.name,
//         description: req.body.description,
//         dueDate: req.body.dueDate
//     });
//     try{
//         const savePosted = await user.save();
//         res.json(savePosted);
//     }catch(err){
//         res.json({message: err});
//     }
// })
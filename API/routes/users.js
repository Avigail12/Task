const express = require('express');

const router = express.Router();
var fs = require('fs');

const sql = require('mssql');
const User = require('../models/User');
const { json } = require('body-parser');

// const config = {
//     user: 'appuser',
//     password: 'password',
//     server: 'LAPTOP-5P3CE9K1\\SQLEXPRESS', 
//     database: 'task',
//     port:1433
// };


router.get('/', async (req, res, next) => {
  //  res.render('test', {output: 'req.body.'});

  var content = fs.readFileSync('user.txt','utf8');
    res.send(content);
});

router.post('/', async (req, res) => {
    fs.appendFile('user.txt', req.body, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  //res.send(fs.readFile());
});
// const executeQuery = function (res, query) {
//     sql.connect(dbConfig, function (err) {
//         if (err) {{"avigail":"cohen"},{"shani":"levi"},{"clary":"fry"}
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             // create Request object
//             var request = new sql.Request();
//             // query to the database
//             request.query(query, function (err, result) {
//                 if (err) {
//                     console.log(err);
//                     res.send(err);
//                 }
//                 else {
//                     res.send(result);
//                 }
//             });
//         }
//     });
// }
// router.post('/', function (req, res) {
  
//     var query = "INSERT INTO [users] (username, password, fullname) VALUES ('"+req.body.username+"','"+req.body.password+"','"+req.body.fullname+"')";
//     executeQuery(res, query);
//     // var query = "INSERT INTO [users] (username, password, fullname) VALUES (req.body.username, req.body.password, req.body.fullname)";
//     // executeQuery(res, query);
// });

// router.post('/', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password,
//         fullname: req.body.fullname
//     });
//     try{
//         const savePosted = await user.save();
//         res.json(savePosted);
//     }catch(err){
//         res.json({message: err});
//     }
  
// });
// router.get('/specific', (req, res) => {
//     res.send('We are on specific posts');
// });

module.exports = router;



const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
// var sql = require("mssql");

// var config = {
//     user: 'appuser',
//     password: 'password',
//     server: 'LAPTOP-5P3CE9K1\SQLEXPRESS', 
//     database: 'task',
//     port: 1433 
// };

// var connection = new sql.ConnectionPool(config);

// connection.connect(function(err){
//     if(err) throw err;
//     var request = new sql.Request(connection);
           
//         // query to the database and get the records
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
// });
// // make a request valid
app.use(bodyParser.json());
//Import route
const taskRoute = require('./routes/tasks');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');


//Midleware
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);
app.use('/api/auth', authRoute);
//app.use('/user', userRoute);

//Routes

app.get('/', (req, res) => {
    res.send('We are on home');
});



// connect to db
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true } ,() => {
//     console.log('Connected with Db');
// });

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
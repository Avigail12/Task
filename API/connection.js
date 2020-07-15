const sqlite3 = require('sqlite3').verbose();



exports.db = new sqlite3.Database('./task.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the task.db SQlite database.');
  });

  // exports.db.serialize(() => {
  //   db.each(`SELECT username,
  //                   password 
  //            FROM users`, (err, row) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     console.log(row.id + "\t" + row.name);
  //   });
  // });


  // exports.db.close((err) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   console.log('Close the database connection.');
  // });
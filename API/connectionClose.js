const sqlite3 = require('sqlite3').verbose();

exports.db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
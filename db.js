// making sqlite DB and exporting it for use in other files
// This file is responsible for creating the sqlite database and exporting it for use in other files
// It uses the sqlite3 package to create a new database file called notes.db in the current directory
// local databases are quick and easy to use for small projects
const path    = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'notes.db');
const db     = new sqlite3.Database(dbPath, err => {
  if (err) console.error('❌ Failed to open database:', err);
});

module.exports = db;

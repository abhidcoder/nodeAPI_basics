// this creates the table structure for the notes table
// and ensures that the table is created only once when the application starts
// updated_at, created_at are set to the current date and time when a note is created by default
// id is a unique identifier for each note will be generated using the uuid package
const db = require('../db');

let initialized = false;

exports.initDb = (req, res, next) => {
  if (initialized) return next();

  const ddl = `
    CREATE TABLE IF NOT EXISTS notes (
      id          TEXT    PRIMARY KEY,
      user_id     TEXT    NOT NULL,
      title       TEXT    NOT NULL,
      content     TEXT,
      created_at  TEXT    NOT NULL,
      updated_at  TEXT    NOT NULL  
    );
  `;
  db.run(ddl, err => {
    if (err) return res.status(500).json({ error: err.message });
    initialized = true;
    console.log('✅ notes table is in place');
    next();
  });
};

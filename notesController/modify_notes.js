const express      = require('express');
// Generate a unique id for each note
// using the uuid package. This is a common practice in Node.js applications

// updated_at, created_at are set to the current date and time when a note is created by default
// id is a unique identifier for each note will be generated using the uuid package
const { v4: uuidv4 } = require('uuid');
const db            = require('../db');
const router        = express.Router();

router.post('/', (req, res) => {
  const { user_id, title, content } = req.body;
  if (!user_id || !title) return res.status(400).json({ error: 'user_id and title are required' });

  const id  = uuidv4();
  const now = new Date().toISOString();
  const sql = `
    INSERT INTO notes
      (id, user_id, title, content, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.run(sql, [id, user_id, title, content||null, now, now], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT * FROM notes WHERE id = ?', [id], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(row);
    });
  });
});

module.exports = router;

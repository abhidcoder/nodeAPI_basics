const express = require('express');
const db      = require('../db');
const router  = express.Router();

// get all notes
router.get('/', (req, res) => {
  const user_id = req.query.user_id;
  db.all(
    'SELECT * FROM notes',
    [user_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});


// get a single note by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get(
    'SELECT * FROM notes WHERE id = ?',
    [id],
    (err, row) => {
      if (err)          return res.status(500).json({ error: err.message });
      if (!row)         return res.status(404).json({ error: 'Note not found' });
      res.json(row);
    }
  );
});


module.exports = router;
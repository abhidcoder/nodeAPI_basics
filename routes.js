// env file for environments like DEV, PROD, STAGING & Local
require('dotenv').config();
const express     = require('express');
// importing the middleware
const { initDb }  = require('./notesController/init_db');
// notesEditor for chaging the way we edit the notes all the API can be listed here
const notesEditor = require('./notesController/modify_notes');
// viewNotes for viewing the notes & how we want to view the notes 
const viewNotes   = require('./notesController/get_notes');

const app = express();
app.use(express.json());


const notesRouter = express.Router();

notesRouter.use(initDb); // adding this as middleware to ensure the database is initialized before any routes are processed

// for VERSION CONTROL 
app.use('/api/v1/', notesRouter);

notesRouter.use('/takeNotes', notesEditor); 
notesRouter.use('/viewNotes', viewNotes);   


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Notes service listening on http://localhost:${PORT}`);
});

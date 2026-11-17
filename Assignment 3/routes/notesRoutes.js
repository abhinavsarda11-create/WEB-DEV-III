const express = require('express');
const router = express.Router();

const {
  getAllNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController');

router.route('/')
  .get(getAllNotes)
  .post(addNote);

router.route('/:id')
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
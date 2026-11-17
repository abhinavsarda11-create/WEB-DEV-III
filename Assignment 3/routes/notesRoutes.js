const express = require('express');
const router = express.Router();
// const fetchUser = require('../middleware/fetchUser'); // Uncomment when using JWT auth
const {
  getAllNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController');

// If using auth middleware, pass fetchUser as the second argument: e.g., router.get('/', fetchUser, getAllNotes)
router.route('/')
  .get(getAllNotes)
  .post(addNote);

router.route('/:id')
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
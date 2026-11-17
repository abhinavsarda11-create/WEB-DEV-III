const Note = require('../models/Note');

// @desc    Fetch all notes for a user
// @route   GET /api/notes
const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.query.user;
    const filter = userId ? { user: userId } : {};

    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.status(200).json({
      count: notes.length,
      notes
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single note by ID
// @route   GET /api/notes/:id
const getNoteById = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Ownership check (if auth middleware is active)
    if (req.user && note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized to access this note' });
    }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new note
// @route   POST /api/notes
const addNote = async (req, res, next) => {
  try {
    const { title, description, tag, user } = req.body;
    const userId = req.user?.id || user;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const note = await Note.create({
      user: userId,
      title,
      description,
      tag: tag || 'General'
      // 'file' intentionally omitted for now (defaults to null)
    });

    res.status(201).json({
      message: 'Note added successfully',
      note
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update an existing note
// @route   PUT /api/notes/:id
const updateNote = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Ownership check (if auth middleware is active)
    if (req.user && note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized to update this note' });
    }

    const updatedFields = {};
    if (title !== undefined) updatedFields.title = title;
    if (description !== undefined) updatedFields.description = description;
    if (tag !== undefined) updatedFields.tag = tag;

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: 'Note updated successfully',
      note
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete an existing note
// @route   DELETE /api/notes/:id
const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Ownership check (if auth middleware is active)
    if (req.user && note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized to delete this note' });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Note deleted successfully',
      id: req.params.id
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote
};
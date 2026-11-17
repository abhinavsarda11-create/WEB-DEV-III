const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters']
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [5, 'Description must be at least 5 characters']
    },
    tag: {
      type: String,
      default: 'General',
      trim: true
    },
    file: {
      type: String,
      default: null // Optional: will be populated when Multer is integrated
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Note', noteSchema);
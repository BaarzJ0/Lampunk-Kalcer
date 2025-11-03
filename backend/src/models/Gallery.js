const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['culture', 'tourism', 'food', 'other']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);
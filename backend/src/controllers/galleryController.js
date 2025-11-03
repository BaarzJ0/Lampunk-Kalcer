const Gallery = require('../models/Gallery');

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().populate('author', 'name');
    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
exports.getSingleGalleryItem = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id).populate('author', 'name');
    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: gallery
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Create gallery item
// @route   POST /api/gallery
// @access  Private (Admin)
exports.createGalleryItem = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload an image'
      });
    }

    req.body.image = req.file.filename;
    req.body.author = req.user.id;

    const gallery = await Gallery.create(req.body);
    res.status(201).json({
      success: true,
      data: gallery
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private (Admin)
exports.updateGalleryItem = async (req, res) => {
  try {
    let gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    if (req.file) {
      req.body.image = req.file.filename;
    }

    gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: gallery
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private (Admin)
exports.deleteGalleryItem = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    await gallery.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
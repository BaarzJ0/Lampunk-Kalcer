const News = require('../models/News');

// @desc    Get all news
// @route   GET /api/news
// @access  Public
exports.getNews = async (req, res) => {
  try {
    const news = await News.find().populate('author', 'name');
    res.status(200).json({
      success: true,
      count: news.length,
      data: news
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get single news
// @route   GET /api/news/:id
// @access  Public
exports.getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('author', 'name');
    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }
    res.status(200).json({
      success: true,
      data: news
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Create news
// @route   POST /api/news
// @access  Private (Admin)
exports.createNews = async (req, res) => {
  try {
    req.body.author = req.user.id;
    const news = await News.create(req.body);
    res.status(201).json({
      success: true,
      data: news
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Update news
// @route   PUT /api/news/:id
// @access  Private (Admin)
exports.updateNews = async (req, res) => {
  try {
    let news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: news
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Delete news
// @route   DELETE /api/news/:id
// @access  Private (Admin)
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    await news.remove();

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
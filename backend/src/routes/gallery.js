const express = require('express');
const router = express.Router();
const {
  getGallery,
  getSingleGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} = require('../controllers/galleryController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/')
  .get(getGallery)
  .post(protect, authorize('admin'), upload.single('image'), createGalleryItem);

router.route('/:id')
  .get(getSingleGalleryItem)
  .put(protect, authorize('admin'), upload.single('image'), updateGalleryItem)
  .delete(protect, authorize('admin'), deleteGalleryItem);

module.exports = router;
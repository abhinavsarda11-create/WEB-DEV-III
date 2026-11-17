const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockReport,
  getCategorySummary
} = require('../controllers/productController');

// Report & Aggregation Routes (Place before /:id)
router.get('/low-stock', getLowStockReport);
router.get('/summary', getCategorySummary);

// Standard CRUD Routes
router.route('/').get(getAllProducts).post(createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

// Safe Stock Adjustment Route
router.patch('/:id/stock', adjustStock);

module.exports = router;
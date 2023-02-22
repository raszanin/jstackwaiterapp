import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/', (request, response) => {
  return response.json({ message: 'Waiter App - Server Online' });
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  return response.json('get products by category ok');
});

// List Orders
router.get('/orders', (request, response) => {
  return response.json('get orders ok');
});

// Create Order
router.post('/orders', (request, response) => {
  return response.json('post orders ok');
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  return response.json('patch orders ok');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (request, response) => {
  return response.json('delete orders ok');
});

export default router;

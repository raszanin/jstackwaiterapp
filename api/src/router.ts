import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Waiter App - Server Online' });
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (request, response) => {
  return response.json('get products ok');
});

// Create product
router.post('/products', (request, response) => {
  return response.json('post products ok');
});

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

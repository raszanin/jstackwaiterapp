import { Router } from 'express';

export const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Waiter App - Server Online' });
});

// List categories
router.get('/categories', (request, response) => {
  return response.json('get ok');
});

// Create category
router.post('/categories', (request, response) => {
  return response.json('post ok');
});

// List products
router.get('/products', (request, response) => {
  return response.json('get ok');
});

// Create product
router.post('/products', (request, response) => {
  return response.json('post ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  return response.json('get ok');
});

// List Orders
router.get('/orders', (request, response) => {
  return response.json('get ok');
});

// Create Order
router.post('/orders', (request, response) => {
  return response.json('post ok');
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  return response.json('post ok');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (request, response) => {
  return response.json('post ok');
});

export default router;

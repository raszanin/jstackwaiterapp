import { Response, Request } from 'express';
import { io } from '../../../server';
import { Order } from '../../models/Order';

export async function createOrder(request: Request, response: Response) {
  try {
    const { table, products } = request.body;

    const order = await Order.create({
      table,
      products,
    });

    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    return response.status(201).json(order);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}

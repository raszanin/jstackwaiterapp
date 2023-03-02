import { Response, Request } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(request: Request, response: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    return response.status(200).json(orders);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}

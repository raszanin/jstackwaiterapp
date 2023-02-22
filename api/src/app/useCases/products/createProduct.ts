import { Response, Request } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename;
    const { name, description, price, category, ingredients } = request.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    return response.status(201).json(product);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}

import { Response, Request } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(request: Request, response: Response) {
  try {
    const categories = await Category.find();

    return response.status(200).json(categories);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}

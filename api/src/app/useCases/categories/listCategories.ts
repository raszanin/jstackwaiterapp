import { Response, Request } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(request: Request, response: Response) {
  const categories = await Category.find();

  return response.status(200).json(categories);
}

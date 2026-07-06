import  { type Request, type Response } from 'express';
import { productService } from './product.service.ts';

async function productList(req: Request, res: Response) {
    const productList = await productService.productListService();
    res.send({
        message: 'Hello World server is running!',
        status: 'success',
        data: productList
    });
}

export const productController = {
  productList,
};
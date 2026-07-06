import express, { Router, type Express, type Request, type Response } from 'express';
import { productController } from './product.controller.ts';

const route: Router = express.Router();

route.get('/', productController.productList);
export default route;
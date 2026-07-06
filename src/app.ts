import express, { type Express, type Request, type Response } from 'express';
import productRoute from './product/product.route.ts';
const app: Express = express();

app.use('/product', productRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Hello World server: http://localhost:${port}`);
});

const productListService = async () => {
    return [
        {name: 'Product 1', price: 10},
        {name: 'Product 2', price: 20},
        {name: 'Product 3', price: 30}  
    ]
  }

  export const productService = {
    productListService,
  }
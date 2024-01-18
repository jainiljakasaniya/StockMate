module.exports = {
  info: {
    title: 'Stock Market Service',
    version: '0.0.1',
    description: 'Stock Market API documentation',
    termsOfService: 'https://abc.tech/terms',
    contact: {
      email: 'apiteam@abc.tech',
    },
    license: {
      name: 'StockMate license',
      url: 'https://abc.tech/StockMate/licenses/LICENSE.html',
    },
  },
  host: 'localhost:8000',
  basePath: '/',
  apis: ['./src/component/**/*.route.js'],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

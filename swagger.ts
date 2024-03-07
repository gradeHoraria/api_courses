const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0'});

const doc = {
  info: {
    title: 'API de cursos',
    description: 'Documentação da api de cursos do sistema de grade horária'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./src/config/routes.ts', './src/config/routesPublic.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc)
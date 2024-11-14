const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
openapi: '3.0.0',
info: {
title: 'Helath Tracker API',
version: '1.0.0',
description: 'Health Tracker API Description',
},
};

const options = {
swaggerDefinition,
apis: [
    './routes/*.js',
    './routes/**/*.js',
    './src/routes/*.js',
    './src/routes/**/*.js',
    './*.js'  // Include root files
  ], // Path to the API routes in your Node.js application
};



const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
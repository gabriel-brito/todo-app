const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
  response.send('Hello Routes');
});

module.exports = routes;
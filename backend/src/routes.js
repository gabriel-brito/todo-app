const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.post('/users/new', UserController.create);
routes.post('/users/recover', UserController.recoverUser);

module.exports = routes;
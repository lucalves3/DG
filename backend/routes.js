const express = require('express');
const {
  getAllUsers,
  CreateUser,
  DeleteUser,
  UpdateUser,
  FindUserById,
} = require('./controllers/userController');

const Routes = express.Router();

// Rotas de User
Routes.get('/users', getAllUsers);
Routes.get('/users/:id', FindUserById);
Routes.put('/users/:id', UpdateUser);
Routes.post('/users', CreateUser);
Routes.delete('/users/:id', DeleteUser);

module.exports = Routes;

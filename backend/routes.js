const express = require('express');
const {
  getAllUsers,
  CreateUser,
  DeleteUser,
  UpdateUser,
} = require('./controllers/userController');

const Routes = express.Router();

// Rotas de User
Routes.get('/users', getAllUsers);
// Routes.get('/employees/:id', getById);
Routes.put('/users/:id', UpdateUser);
Routes.post('/users', CreateUser);
Routes.delete('/users/:id', DeleteUser);

module.exports = Routes;

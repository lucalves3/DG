const ObjectInterface = require('../middlewares/objectInterface');
const Pagination = require('../middlewares/pagination');
const Sequelize = require('sequelize');
const { User } = require('../models');

require('dotenv').config();

const getAllUsers =
  ('/users',
  async (req, res) => {
    try {
      // Buscando todos os usuarios do banco para saber quantas páginas vamos ter ao todo
      const users = await User.findAll();

      // MiddleWare para paginação de 15 em 15 a cada página
      const pagination = Pagination(req, users.length, 15);
      const { page } = pagination.previousPage || pagination.nextPage;
      const limitUsers = await User.findAll({
        limit: 15,
        offset: typeof page === 0 ? 0 : 15 * page,
      });

      // MiddleWare de modelo de retorno para padronizar o backend
      const objectReturn = ObjectInterface(pagination, limitUsers, false);
      return res.status(200).json(objectReturn);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const CreateUser =
  ('/users',
  async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const UpdateUser =
  ('/users/:id',
  async (req, res) => {
    const { name, birthDate } = req.body;
    try {
      const { id } = req.params;
      const [updateUser] = await User.update(
        {
          name,
          birthDate,
        },
        { where: { id } },
      );
      if (!updateUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res
        .status(200)
        .json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const DeleteUser =
  ('/users/:id',
  async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({
        where: { id },
      });
      return res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = {
  getAllUsers,
  UpdateUser,
  CreateUser,
  DeleteUser,
};

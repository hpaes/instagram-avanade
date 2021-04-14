const { Usuario } = require('../models');

const usersController = {
  index: async (request, response) => {
    const usuarios = await Usuario.findAll();
    return response.json(usuarios);
  },

  create: async (request, response) => {
    const { nome, email, senha } = request.body;

    const usuario = await Usuario.create({
      nome,
      email,
      senha,
    });

    return response.status(201).json(usuario);
  },

  update: async (request, response) => {
    const { nome, email, senha } = request.body;
    const { id } = request.params;

    const update = await Usuario.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (!update) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(201).json(update);
  },

  delete: async (request, response) => {
    const { id } = request.params;

    const deleted = await Usuario.destroy({
      where: {
        id,
      },
    });

    if (!deleted) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(201).json({ message: 'User deleted succefully' });
  },
};

module.exports = usersController;

const { Usuario } = require('../models');

const usersController = {
  index: async (request, response) => {
    const usuarios = await Usuario.findAll();
    return response.json(usuarios);
  },

  create: async (request, response) => {
    const { nome, email, senha } = request.body;

    const usuario = {
      nome,
      email,
      senha,
    };

    await Usuario.create(usuario);

    return response.status(201).send();
  },

  update: async (request, response) => {
    const { nome, email } = request.body;
    const { id } = request.params;

    const update = await Usuario.update(
      {
        nome: nome,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );

    const user = {
      nome,
      email,
    };

    if (!update) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(201).json(user);
  },

  delete: async (request, response) => {
    const { id } = request.params;

    // const findId = await Usuario.findByPk(id);

    // console.log(findId);
    // if (!findId) {
    //   return response.status(404).json({ message: 'User not found' });
    // }

    const deleted = await Usuario.destroy({
      where: {
        id: id,
      },
    });

    if (!deleted) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(201).json({ message: 'User deleted succefully' });
  },
};

module.exports = usersController;

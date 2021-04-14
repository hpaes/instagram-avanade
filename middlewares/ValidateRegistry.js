const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
  const { nome, email, senha } = request.body;

  if (!email) {
    return response.status(400).json({ error: 'Invalid email' });
  }

  const userExists = await Usuario.findAll({
    where: {
      email,
    },
  });

  if (userExists.length) {
    return response.status(404).json({ error: 'Email already registred' });
  } else if (!senha || senha.length < 6 || senha.length > 12) {
    return response.status(400).json({ error: 'Invalid password format' });
  } else if (!nome || nome.length < 0) {
    return response.status(400).json({ error: 'Invalid name' });
  }

  return next();
};

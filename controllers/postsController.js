const { Post } = require('../models');

const postsController = {
  index: async (request, response) => {
    const posts = await Post.findAll();

    return response.json(posts);
  },

  create: async (request, response) => {
    const { texto, img, usuarios_id } = request.body;

    const post = await Post.create({
      texto,
      img,
      usuarios_id,
    });

    return response.status(201).json(post);
  },

  update: async (request, response) => {
    const { texto, img } = request.body;
    const { id } = request.params;

    const update = await Usuario.update(
      {
        texto,
        img,
        usuarios_id,
        n_likes,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!update) {
      return response.status(404).json({ message: 'Post not found' });
    }

    return response.status(201).json(update);
  },

  delete: async (request, response) => {
    const { id } = request.params;

    const deleted = await Post.destroy({
      where: { id },
    });

    if (!deleted) {
      return response.status(404).json({ message: 'Post not found' });
    }

    return response.status(201).json({ message: 'Post deleted succefully' });
  },
};

module.exports = postsController;

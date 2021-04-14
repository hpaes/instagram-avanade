const { Post } = require('../models');

const postsController = {
  index: async (request, response) => {
    const posts = await Post.findAll();

    return response.json(posts);
  },

  show: async (request, response) => {
    const { id } = request.params;

    const post = await Post.findByPk(id);

    if (!post) {
      return response.status(404).json({ message: 'Post not found' });
    }

    return response.status(200).json(post);
  },

  create: async (request, response) => {
    const { texto, img, usuarios_id } = request.body;

    const post = await Post.create({
      texto,
      img,
      usuarios_id,
      n_likes: 0,
    });

    return response.status(201).json(post);
  },

  update: async (request, response) => {
    const { texto } = request.body;
    const { id } = request.params;

    const validate = await Post.update(
      {
        texto,
      },
      {
        where: {
          id,
        },
      }
    );

    console.log(validate[0]);

    const update = {
      texto,
    };

    if (!validate[0]) {
      return response.status(400).json({ message: 'Post not found' });
    } else {
      return response.json(update);
    }
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

const { Post } = require('../models');

const postsController = {
  index: async (request, response) => {
    const posts = await Post.findAll();

    return response.json(posts);
  },

  create: async (request, response) => {
    const { texto, img, usuarios_id } = request.body;

    const post = {
      text: texto,
      img: img,
      usuarios_id: usuarios_id,
      n_likes: 0,
    };
  },
};

module.exports = postsController;

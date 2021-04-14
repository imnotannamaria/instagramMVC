const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts =  await Post.findAll();
       
        return res.json(posts);
    },

    create: async (req, res) => {
         let { texto, img, usuarios_id, n_likes } = req.body;
         let novoPost = await Post.create ({
          texto,
          img,
          usuarios_id,
          n_likes
         });

         return res.json(novoPost);
    },

    update: async (req,res) => {
        const { id } = req.params;
        const{ texto, img, usuarios_id, n_likes } = req.body;

        const posts = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {id}
        });

        return res.json(posts);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const posts = await Post.destroy({
            where: {id}
        });

        return res.json(posts);
    }
}
    

module.exports = postsController;
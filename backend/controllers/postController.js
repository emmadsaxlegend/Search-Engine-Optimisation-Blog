const Post = require('../models/post');

exports.post = async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)

    }
}

//UPDATE POST
exports.update = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post)
        if (post.email === req.body.email) {
          try {
            const one = post.deposit
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            console.log(one + updatedPost.deposit)
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
        }
};

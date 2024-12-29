import Post from "../models/post.model.js"

export const createPost  = async (req,res)=>{

    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.user.id });

    try {
        const savedPost = await post.save();
        res.send(savedPost);
    } catch (err) {
        res.status(400).send(err);
    }

}


export const getPost  = async (req,res)=>{
    const posts = await Post.find().populate('author', 'username');
    res.send(posts);


}

export const getPostByID  = async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).send('Post not found');
        res.send(post);
    } catch (err) {
        res.status(400).send(err);
    }


}



export const updatePostByID  = async (req,res)=>{

    try {
        const task = await Post.findOneAndUpdate(
          { _id: req.params.id, author: req.user.id },
          req.body,
          { new: true }
        );
        if (!task) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ message: "Error updating Post" });
      }

}

export const deletePostByID  = async (req,res)=>{

    try {
        const task = await Post.findOneAndDelete({
          _id: req.params.id,
          author: req.user.id,  
        });

   console.log(req.params.id);


        if (!task) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post deleted" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting posts" });
      }

}

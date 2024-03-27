const { Post } = require("../models/mongo.model")

const allPost = async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json(posts)
}

const createPost = async (req, res, next) => {
    const newPost = new Post({...req.body})
    const createPost = await newPost.save()
    return res.status(201).json(createPost)
}

module.exports = {
    allPost,
    createPost
}
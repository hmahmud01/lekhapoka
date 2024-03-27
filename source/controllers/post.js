const { Post } = require("../models/mongo.model")
const { uploadFile } = require("../utils/index")

const allPost = async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json(posts)
}

const createPost = async (req, res, next) => {
    try{
        let audiofile = await uploadFile(req.file)
        let aname = audiofile.replace('uploads\\', '');
        let audio = "uploads/" + aname
        let data = {
            category: req.body.category,
            cat_id: req.body.cat_id,
            writer: req.body.writer,
            writer_id: req.body.writer_id,
            content: req.body.content,
            rating: req.body.rating,
            audio: audio,
            status: req.body.status,
            uploaded_by: req.body.uploaded_by,
        }
        const newPost = new Post({...data})
        const createPost = await newPost.save()
        return res.status(201).json({
            status: "success",
            object: createPost
        })
    }catch{
        res.status(400).send({
            status: "failed"
        })
    }
}

const findPost = async (req, res, next) => {
    const { cat } = req.params;
    const found = await Post.find({
        category: cat,
    })

    console.log(found)

    return res.status(201).json({
        status: "success",
        object: found
    })
}

module.exports = {
    allPost,
    createPost,
    findPost
}
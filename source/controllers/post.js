const db = require("../models")

exports.createPost = async(req, res, next) => {
    let data = {
        cat_id : req.body.cat_id,
        title : req.body.title,
        rating: req.body.rating,
        writer_id: req.body.writer_id,
        feature: req.body.feature,
        image: req.body.image,
        audio: req.body.audio
    }

    const post = await db.post.create(data);

    res.status(200).json({
        message: `Post added successfully : ${post.title}`
    })
}  

exports.listPost = async(req, res, next) => {
    const list = await db.post.findAll();

    res.status(200).json({
        message: list
    })
}
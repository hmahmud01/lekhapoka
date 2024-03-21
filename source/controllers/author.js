const db = require("../models");

exports.createAuthor = async(req, res, next) => {
    let data = {
        name: req.body.name,
        image: req.body.image,
        birth_date: req.body.birth_date,
        expiry_date: req.body.expiry_date,
    }

    const author = await db.author.create(data);

    res.status(200).json({
        message: `author created : ${author.name}`
    })
}

exports.list = async(req, res, next) => {
    const list = await db.author.findAll();

    res.status(200).json({
        message: list
    })
}
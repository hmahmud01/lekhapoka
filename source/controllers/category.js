const db = require("../models");

exports.createCategory = async (req, res, next) => {
    let data = {
        title: req.body.title
    }

    db.category.create(data)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Category."
            });
        });
}

exports.listCategory = async (req, res, next) => {
    const list = await db.category.findAll();

    res.status(200).json({
        message: list
    })
}
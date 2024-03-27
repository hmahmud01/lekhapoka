const { Writer } = require("../models/mongo.model")

const allWriters = async (req, res, next) => {
    const writers = await Writer.find();
    res.status(200).json(writers);
}

const createWriter = async (req, res, next) => {
    const newWriter = new Writer({...req.body})
    const createWriter = await newWriter.save()
    return res.status(201).json(createWriter)
}

module.exports = {
    allWriters,
    createWriter,
}
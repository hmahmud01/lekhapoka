const { File } = require("../models/mongo.model")

const uploadFile = async (req, res, next) => {
    try {
        const newFile = new File({
            name: req.file.originalname,
            path: req.file.path,
            size: req.file.size,
            mimetype: req.file.mimetype
        });
        await newFile.save();
        res.send({
            msg: "File Upload Successful"
        })
    } catch (error) {
        res.status(400).send({
            msg: "File Upload Failed"
        })
    }
}

const allFiles = async (req, res, next) => {
    try {
        const files = await File.find()
        res.json(files)
    }catch (error) {
        res.status(400).send({
            msg: "File Fetch Failed"
        })
    }
}

module.exports = {
    uploadFile,
    allFiles,
}
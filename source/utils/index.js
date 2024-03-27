const { File } = require("../models/mongo.model")

const uploadFile = async (file) => {
    console.log(file)
    console.log(file.originalname)
    console.log(file.path)
    const newFile = new File({
        name: file.originalname,
        path: file.path,
        size: file.size,
        mimetype: file.mimetype
    })

    const savedFile = await newFile.save()
    return savedFile.path
}

module.exports = {
    uploadFile,
}
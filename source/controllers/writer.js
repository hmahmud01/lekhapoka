const { Writer } = require("../models/mongo.model")
const { uploadFile } = require("../utils/index")

const allWriters = async (req, res, next) => {
    const writers = await Writer.find();
    res.status(200).json(writers);
}

// const uploadFile = async (file) => {
//     console.log(file.originalname)
//     console.log(file.path)
//     const newFile = new File({
//         name: file.originalname,
//         path: file.path,
//         size: file.size,
//         mimetype: file.mimetype
//     })

//     const savedFile = await newFile.save()
//     console.log(savedFile.path)
//     return savedFile.path
// }

const createWriter = async (req, res, next) => {
    try{
        let imagefile = await uploadFile(req.file)
        let iname = imagefile.replace('uploads\\', '');
        let image = "uploads/" + iname
        let data = {
            name: req.body.name,
            birth_date: req.body.birth_date,
            expiry_date: req.body.expiry_date,
            image: image
        }
        const newWriter = new Writer({...data})
        const createWriter = await newWriter.save()
        return res.status(201).json({
            status: "success",
            object: createWriter
        })
    }catch{
        res.status(400).send({
            status: "failed"
        })
    }
}

module.exports = {
    allWriters,
    createWriter,
}
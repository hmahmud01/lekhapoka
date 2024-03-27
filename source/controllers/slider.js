const { Slider } = require("../models/mongo.model")
const { uploadFile } = require("../utils/index")
 
const allSliders = async (req, res, next) => {
    const sliders = await Slider.find();
    res.status(200).json(sliders)
}

const createSlider = async (req, res, next) => {
    try{
        let imagefile = await uploadFile(req.file)
        let iname = imagefile.replace('uploads\\', '');
        let image = "uploads/" + iname
        let data = {
            title: req.body.title,
            content: req.body.content,
            image: image
        }
        const newSlider = new Slider({...data})
        const createSlider = await newSlider.save()
        return res.status(201).json({
            status: "success",
            object: createSlider
        })
    }catch{
        res.status(400).send({
            status: "failed"
        })
    }
}

module.exports = {
    allSliders,
    createSlider,
}
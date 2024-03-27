const { Slider } = require("../models/mongo.model")
 
const allSliders = async (req, res, next) => {
    const sliders = await Slider.find();
    res.status(200).json(sliders)
}

const createSlider = async (req, res, next) => {
    const newSlider = new Slider({...req.body})
    const createSlider = await newSlider.save()
    return res.status(201).json(createSlider)
}

module.exports = {
    allSliders,
    createSlider,
}
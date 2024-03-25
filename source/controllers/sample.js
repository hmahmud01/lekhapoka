const { Sample } = require("../models/mongo.model");

const allSamples = async (req, res, next) => {
    console.log("SAMPLE RUNNING");
    const allSamples = await Sample.find();
    res.status(200).json(allSamples);
} 

const getSample = async (req, res ,next) => {
    console.log("SAMPLE RUNNING");
    const { id } = req.params;
    const sample = await Sample.findById(id);
    return res.status(200).json(sample);
}

const createSample = async (req, res, next) => {
    console.log("SAMPLE RUNNING");
    const newSample = new Sample({ ...req.body });
    const createSample = await newSample.save();
    return res.status(201).json(createSample);
}

const updateSample = async (req, res, next) => {
    console.log("SAMPLE RUNNING");
    const { id } = req.params;
    await Sample.updateOne({ _id: id }, req.body);
    const updateSample = await Sample.findById(id);
    return res.status(200).json(updateSample)
}

const deleteSample = async (req, res, next) => {
    console.log("SAMPLE RUNNING");
    const { id } = req.params;
    const deleteSample = await Sample.findByIdAndDelete(id);
    return res.status(200).json(deleteSample);
}

module.exports = {
    allSamples,
    getSample,
    createSample,
    updateSample,
    deleteSample,
};
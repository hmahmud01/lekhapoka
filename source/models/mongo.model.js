const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true,
    }
})


const Sample = mongoose.model("Sample", SampleSchema);

module.exports = {Sample};
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

// Define mongoose schema and model
const FileSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    mimetype: String
});

const CategorySchema = new mongoose.Schema({
    title: String,
})

const WriterSchema = new mongoose.Schema({
    name: String,
    image: String,
    birth_date: String,
    expiry_date: String
})

const PostSchema = new mongoose.Schema({
    category: String,
    cat_id: String,
    writer: String,
    writer_id: String,
    content: String,
    rating: Number,
    audio: String,
    status: Boolean,
    uploaded_by: String 
})

const SliderSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
})

const File = mongoose.model('File', FileSchema);
const Category = mongoose.model('Category', CategorySchema);
const Writer = mongoose.model('Writer', WriterSchema);
const Post = mongoose.model('Post', PostSchema);
const Slider = mongoose.model('Slider', SliderSchema);
const Sample = mongoose.model("Sample", SampleSchema);


module.exports = { Sample, File, Category, Writer, Post, Slider };
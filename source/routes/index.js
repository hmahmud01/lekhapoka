const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage })

const sampleController = require("../controllers/sample");
const uploadController = require("../controllers/file");
const categoryController = require("../controllers/category");
const writerController = require("../controllers/writer");
const postController = require("../controllers/post");
const sliderController = require("../controllers/slider");

let routes = app => {
    router.get("/samples", sampleController.allSamples);
    router.get("/samples/:id", sampleController.getSample);
    router.post("/samples", sampleController.createSample);
    router.put("/samples/:id", sampleController.updateSample);
    router.delete("/samples/:id", sampleController.deleteSample);
    router.post('/upload', upload.single('file'), uploadController.uploadFile);
    router.get('/files', uploadController.allFiles);
    router.get('/uploads', express.static(path.join(__dirname, 'uploads')));
    router.get('/categories', categoryController.allCategories);
    router.post('/categories', categoryController.createCategory);
    router.get('/writers', writerController.allWriters);
    router.post('/writers', writerController.createWriter);
    router.get('/post', postController.allPost);
    router.post('/post', postController.createPost);
    router.get('/sliders', sliderController.allSliders);
    router.post('/sliders', sliderController.createSlider);
 
    return app.use("/", router);
      
};

module.exports = routes;
const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sample");

let routes = app => {
    router.get("/samples", sampleController.allSamples);
    router.get("/samples/:id", sampleController.getSample);
    router.post("/samples", sampleController.createSample);
    router.put("/samples/:id", sampleController.updateSample);
    router.delete("/samples/:id", sampleController.deleteSample);

    return app.use("/", router);
};

module.exports = routes;
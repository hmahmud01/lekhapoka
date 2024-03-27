const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const { Sample } = require("./source/models/mongo.model");

const routes = require("./source/routes");

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./source/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced DB.")
    })
    .catch((err) => {
        console.log("Failed to sync db: ", err.message);
    })

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the system" });
});

require("./source/authsrc/auth/auth.routes")(app);


// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

routes(app);

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

// MONGO GUIDE
// https://dev.to/franciscomendes10866/setup-mongodb-with-mongoose-and-express-4c58
// MONGO IMAGE UPLOAD GUIDE
// https://www.bezkoder.com/node-js-upload-store-images-mongodb/
// SQLIZE GUIDE
// https://www.bezkoder.com/node-js-express-sequelize-mysql/

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/lekhapoka", {
                useNewUrlParser: true,
                useUnifiedTopology: true    
        });
        httpServer.listen(PORT, () => {
            console.log(`Lekha Poka Server is running on port ${PORT} and mongoose running`)
        })

        // app.listen(3000, () => console.log("Server started on port 3000. mongoose done"));
    } catch (error) {
        console.error(error);
        console.log("MONGOOSE ERROR")
        process.exit(1);
    }
};

start();
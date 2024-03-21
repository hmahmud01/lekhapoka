const dbConfig = require("../config/config.db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.category = require("./category.model")(sequelize, Sequelize);
db.writer = require("./writer.model")(sequelize, Sequelize);
db.author = require("./auther.model")(sequelize, Sequelize);
db.post = require("./post.model")(sequelize, Sequelize);

module.exports = db;
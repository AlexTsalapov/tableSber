const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("Sequelize");
const sequelize = new Sequelize("tz1", "postgres", "qwerty9551", {
    host: "localhost",
    dialect: "postgres",

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.elements = require("./model.js")(sequelize, Sequelize);
db.items = require("./model2");

module.exports = db;

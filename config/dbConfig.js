const Sequelize = require("sequelize");
module.exports = sequelize = new Sequelize("tz1", "postgres", "qwerty9551", {
    dialect: "postgres",
    host: "localhost"
});
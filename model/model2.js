const db = require("../config/dbConfig");
const Sequelize = require("sequelize")

module.exports = db.define("item", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false

    },
    info: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
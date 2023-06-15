const Sequelize = require("sequelize")
const Temporal = require("sequelize-temporal")
const db = require("../config/dbConfig")
const model = require("./model2")
const temp = Temporal(model, db , {blocking: true, full: false});
temp.sequelize.sync( {force: false, hooks: true, benchmark: true});
module.exports = temp;
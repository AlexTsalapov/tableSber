const elements = require("../service/service");
module.exports = app => {
    const elements = require("../service/service.js");

    var router = require("express").Router();

    router.get("/", elements.base);

    // открыть новый уровень
    router.put("/open", elements.open);

    app.use("/elements", router);

};
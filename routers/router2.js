//const temporal = require("../model/temporal")
module.exports = app => {
    const elements = require("../service/service2.js");

    var router = require("express").Router();
    // открыть новый уровень
    router.get("/", elements.read);
    router.post("/create", elements.create);
    // router.get("/read", elements.read);
    router.delete("/delete", elements.delete);
    router.put("/update", elements.update);

    app.use("/items", router);
}
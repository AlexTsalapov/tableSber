const db = require("../model/model2");
const temporal = require("../model/temporal")


exports.read = (req, res) => {
    db.findAll({attributes: ['id', 'info']})
        .then(data => {
            const formattedElements = data.map((item) => {
                return {
                    id: item.id,
                    info: item.info
                };
            });
            openElements = formattedElements;
            res.render("table.hbs", {
                users: formattedElements
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving elements."
            });
        });
}
exports.delete= (req, res) => {
    db.destroy({
        where: {id: req.body.id}
    })
    res.status(200)

}
exports.update= (req, res) => {
    db.update(req.body, {
        where: {id: req.body.id}
    })
}

exports.create = (req, res) => {
    db.create(req.body)
        .then(data => {
            const formattedElements = data.map((item) => {
                return {
                    id: item.id,
                    info: item.info
                };
            });
            openElements = formattedElements;
            res.render("table2.hbs", {
                users: formattedElements
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving elements."
            });
        });
}


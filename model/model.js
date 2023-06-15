module.exports = (sequelize, Sequelize) => {
    const Element = sequelize.define("element", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        l1: {
            type: Sequelize.STRING
        },
        l2: {
            type: Sequelize.STRING
        },
        l3: {
            type: Sequelize.STRING
        },
        l4: {
            type: Sequelize.STRING
        }
    });
    return Element;
};
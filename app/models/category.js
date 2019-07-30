module.exports = function (sequelize, Sequelize) {
    var Category = sequelize.define("Category", {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Category;
};
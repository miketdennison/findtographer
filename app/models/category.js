
module.exports = function (sequelize, Sequelize) {
    var Category = sequelize.define("Category", {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    /*
        //define foreign key constraints
        Category.associate = function(models) {
            Category.belongsTo(models.User, {
    
                foreignKey: {
                    allowNull: false
                }
            });
        }*/
    return Category;
};
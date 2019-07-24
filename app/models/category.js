module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
            type: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        });

    //define foreign key constraints
    Category.associate = function(models) {
        Category.belongsTo(models.Business, {
            foreignKey: {
                allowNull:false
            }
        });
    }
    return Category;
};
module.exports = function (sequelize, DataTypes) {
    var Photo = sequelize.define("Photo", {
        name: {
            type: {
                first: DataTypes.STRING,
                last: DataTypes.STRING
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    //define foreign key constraints
    Photo.associate = function(models) {
        Photo.belongsTo(models.Business,{
            foreignKey: {
                allowNull:false
            }
        });
    }
    return Photo;
};
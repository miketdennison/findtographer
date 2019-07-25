module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
    
        city: {
              type: DataTypes.STRING,
              allowNull: false
          },
          state: {
              type: DataTypes.STRING,
              allowNull: false
          }
    
        });

    //define foreign key constraints
    Location.associate = function(models) {
        Location.belongsTo(models.Business,{
           
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Location;
};
module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
      businessName: {
        type:DataTypes.STRING,
        allowNull: false
      },
      pricing: {
        type: DataTypes.STRING,
        allowNull: false
      },
      travel: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    
  });
  Business.associate = function (models) {

    Business.hasMany(models.Photo, {
      onDelete: 'cascade'
    });

    Business.hasMany(models.Location, {
      onDelete: 'cascade'
    });

    Business.hasMany(models.Category, {
      onDelete: 'cascade'
    });

    Business.hasMany(models.Contact, {
      onDelete: 'cascade'
    });
  };
return Business;

};

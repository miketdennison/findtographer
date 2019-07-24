module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
          website: {
            type: DataTypes.STRING,
            allowNull: false
          },
          phone: {
              type: DataTypes.STRING,
              allowNull: false
          },
          email: {
              type: DataTypes.STRING,
              allowNull: false
          }
        }); 

    //define foreign key constraints
    Contact.associate = function(models) {
        Contact.belongsTo(models.Business,{
            foreignKey: {
                allowNull:false
            }
        });
    }
    return Contact;
};
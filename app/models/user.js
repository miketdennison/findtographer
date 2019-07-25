
module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define('user', {
        // businessName: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        //   },
        //   firstname: {
        //     type: Sequelize.STRING,
        //     notEmpty: true
        // },

        // lastname: {
        //     type: Sequelize.STRING,
        //     notEmpty: true
        // },
         
        //   city: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        // },
        // state: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        // },
        // price: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        //   },
        //   travel: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: true
        //   },
          
        
        // 
        

        
       
        // website: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        //   },
        //   phone: {
        //       type: Sequelize.STRING,
        //       allowNull: false
        //   },
        // email: {
        //     type: Sequelize.STRING,
        //     validate: {
        //         isEmail: true
        //     }
        // },
        username: {
            type: Sequelize.TEXT
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        experience: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
                type: Sequelize.STRING,
                allowNull: false
        },
        city: {
            type: Sequelize.STRING,
                allowNull: false
        },
          state: {
            type: Sequelize.STRING,
                allowNull: false
          }
    });

    User.associate = function (models) {
        User.hasMany(models.Category, {
            onDelete: 'cascade',
            allowNull: false
        });
    }
    return User;
}

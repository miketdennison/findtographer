module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: true
        },

        lastname: {
            type: Sequelize.STRING,
            allowNull: true
        },

        username: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        experience: {
            type: Sequelize.STRING,
            get: function () {
                return JSON.parse(this.getDataValue('experience'));
            },
            set: function (val) {
                return this.setDataValue('experience', JSON.stringify(val));
            },
            allowNull: true
        },
        price: {
            type: Sequelize.STRING,
            get: function () {
                return JSON.parse(this.getDataValue('price'));
            },
            set: function (val) {
                return this.setDataValue('price', JSON.stringify(val));
            }
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true
        },
        travel: {
            type: Sequelize.STRING,
            get: function () {
                return JSON.parse(this.getDataValue('travel'));
            },
            set: function (val) {
                return this.setDataValue('travel', JSON.stringify(val));
            },
            allowNull: true
        },
        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    return User;
}
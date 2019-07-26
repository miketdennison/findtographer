var db = require('../models')

module.exports = function (app) {
    app.put('/api/userupdate', function (req, res) {

        db.User.update({ firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, city: req.body.city, state: req.body.state, travel: req.body.travel, experience: req.body.experience, price: req.body.price }, { where: { email: req.body.email } }).then(function (dbUser) {
            res.json(dbUser);
            console.log(dbUser);
        })
    })

    app.get("/api/results", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser)
        })
    });
};
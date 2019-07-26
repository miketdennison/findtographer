var db = require('../models')

module.exports = function (app) {
    app.put('/api/userupdate', function (req, res) {

        db.user.update({ firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, city: req.body.city, state: req.body.state, travel: req.body.travel, about: req.body.about, experience: req.body.experience, price: req.body.price }, { where: req.body.email }).then(function (dbUser) {
            res.json(dbUser);
            console.log(dbUser);
        })
    })

    app.get("/api/results", function (req, res) {
        db.user.findAll({}).then(function (dbUser) {
            res.json(dbUser)
        })
    });
}
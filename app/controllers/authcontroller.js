var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render("signup", { error: req.flash("error") });
}
exports.signin = function (req, res) {
    res.render("signin", { error: req.flash("error") });
}
exports.dashboard = function (req, res) {
    res.render("dashboard");
}
exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect("/");
    });
}
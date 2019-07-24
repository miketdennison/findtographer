var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render("signup", { error: req.flash("Email is already taken. Try again.") });
}
exports.signin = function (req, res) {
    res.render("signin", { error: req.flash("Invalid username or password. Try again.") });
}
exports.dashboard = function (req, res) {
    res.render("dashboard");
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect("/");
    });
}
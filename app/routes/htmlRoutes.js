module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/results", function (req, res) {
        res.render("results");
    });
    
}
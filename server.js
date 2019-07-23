// DEPENDENCIES
// Express
const express = require("express");
const app = express();
// Handles authentication
const passport = require("passport");
const session = require("express-session");
const env = require("dotenv").config();
const exphbs = require("express-handlebars");

// PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PASSPORT
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
})); //used for hashing
app.use(passport.initialize());
app.use(passport.session());

//For Handlebars
app.set("views", "./app/views")
app.engine("hbs", exphbs({
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

app.get("/", function (req, res) {

    res.send("Welcome to Passport with Sequelize");

});

// MODELS
const models = require("./app/models");

// ROUTES
const authRoute = require("./app/routes/auth.js")(app, passport);

// PASSPORT
require("./app/config/passport/passport.js")(passport, models.user);

// MYSQL SYNC DB
models.sequelize.sync().then(function () { 
    console.log("Nice! Database looks fine")
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// LISTEN
app.listen(5000, function (err) {
    if (!err) console.log("Site is live");
    else console.log(err);
});
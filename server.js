// DEPENDENCIES
const express = require("express");
const flash = require('connect-flash');
const passport = require("passport");
const session = require("express-session");
const env = require("dotenv").config();
const exphbs = require("express-handlebars");
const models = require("./app/models");
const app = express();

// PORT
const PORT = process.env.PORT || 5000;


app.use(express.static('app/public'))
// PARSING
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(flash());

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

// ROUTES
const authRoute = require("./app/routes/auth.js")(app, passport);
require("./app/routes/api-routes.js")(app);
require('./app/routes/htmlRoutes.js')(app);

// PASSPORT
require("./app/config/passport/passport.js")(passport, models.User);

// LISTEN
models.sequelize.sync().then(function () {
    app.listen(PORT, function (err) {
        if (!err) console.log(`Listening on localhost:${PORT}`);
        else console.log(err);
    });
}).catch(function (err) {
    console.log(err)
});

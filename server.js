//Add and connect library
const express = require('express');
const session = require('express-session');
const mongooseStore = require('connect-mongo');
const passport = require('passport');


const app = express();

//MongoDb
require('./server/config/db')
require('./server/config/passport')

//Configuration
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(session({
    name: 'decodeBlog.session',
    secret: 'keyboard cat',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    resave: false,
    store: mongooseStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017'
    })
}));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

//Router
app.use(require('./server/pages/router'));
app.use(require('./server/Categories/router'));
app.use(require('./server/auth/router'));
app.use(require('./server/Blog/router'));
app.use(require('./server/Comments/router'));

//Connect port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sever work on port ${PORT}`);
});
const express = require('express');
const helmet = require('helmet');
const app = express();
var cors = require('cors');
const morgan = require('morgan');
const errorsLog = require('./helpers/errorsLog');
const appRouter = express.Router();
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();

const jwt = require('jsonwebtoken');


// Helmet
app.use(helmet());
app.disable('x-powered-by');
// CORS Middleware
app.use(cors());


require('./auth/authentication_passport')(passport);
// DB module

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-HTTP-Method-Override", "PATCH, GET, POST, PATH, DELETE");
    next();
})
const db = require('../config/initializer/database');


db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function () {
    console.log("connection success !!!");
});

// Passport initialization
require('./auth/authentication_passport')(passport)

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(session({
    views: 5,
    secret: '#@\\/54.',
    name: "sessionID",
    resave: false,
    expires: new Date(Date.now() + (60 * 60 * 1000)),
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        // domain: 'example.com',
        // path: 'foo/bar',
        expires: new Date(Date.now() + (60 * 60 * 1000))
    }
}))

// Passport Middelware
app.use(passport.initialize());
app.use(passport.session());

// Routers
// index Router
appRouter.use('/', require('./routes/index'));
// users Router
appRouter.use('/users', require('./routes/usersRouter'));
//Products Router
appRouter.use('/products', require('./routes/productsRouter'));


// app Router
app.use('/api', appRouter);

// Errors Log
app.use(errorsLog);

module.exports = app;

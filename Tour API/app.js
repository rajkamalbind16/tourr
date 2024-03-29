var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db')
const cors = require("cors");
const dotenv = require("dotenv");
const config_Server = require("./config/Server")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userSupport = require('./routes/support,.router');
var feedback = require('./routes/feedbacks.router')
var notification = require('./routes/notification.router')
var adventure = require('./routes/adventure.router')

var app = express();
db.dbConnection()
dotenv.config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const allowedOrigins = ['http://localhost:3000', 'http://shivila.online'];
app.use(cors({
  origin: ['http://localhost:3000', 'https://www.demotour.shivila.online', 'https://www.dekhoindia.shivila.online'],
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
}))

app.use('/profile_images', express.static(path.join(__dirname, 'public/profile_images'))) // PROFILE IMAGES

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/support', userSupport);
app.use('/feedback', feedback);
app.use('/notification', notification);
app.use('/adventure', adventure);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// =============== IMAGES STATIC PATHS =============== //
app.use('/profile_images', express.static(path.join(__dirname, 'public/profile_images'))) // PROFILE IMAGES
app.use('/posts', express.static(path.join(__dirname, 'public/posts'))) // PROFILE IMAGES
app.use('/adventure', express.static(path.join(__dirname, 'public/adventure'))) // adventure


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = config_Server(app);

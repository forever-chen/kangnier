const express = require('express');
const app = express();
const path = require('path');
const mysql = require('./mysql');
var compression = require('compression');
app.use(compression());

//react的缺点首屏可交互时间长

/////////////////////////////////
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//////////////////////////////
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
/////////////////////////////////
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
/////////////////////////////
app.use(express.static(path.resolve(__dirname, 'www')));

const adminRoute = require('./routes/admin');
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
//use用来做中间件
app.use('/admin', function (req, res, next) {

    if (req.session.login) {
        next();
    } else {
        res.redirect('/login');
    }
})
app.use('/admin', adminRoute);
app.use('/', indexRoute);
app.use('/login', loginRoute);//在/login下使用

app.listen(8004, () => {
    console.log('服务启动')
});
process.on('uncaughtException', function (ex) {
    console.log(ex)
})


// app.listen(3000);
//运行：npm run start/watch
//npm install forever -g相当于nodemon

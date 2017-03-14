//const express=require('express');
//const route=express.Router();
//const fs=require('fs');
//const path=require('path');
//const crypto = require('crypto');
//var mysql=require('mysql');
//  var pool=mysql.createPool({
//      connectionLimit:10000,
//      host:'localhost',
//      user:'root',
//      password:'',
//      database:'kangnier'
//  });
//route.get('/',(req,res)=>{
//  res.sendFile(path.resolve('./www/views/login.html'));
//})
//
//route.post('/check',(req,res)=>{
//	var hash = crypto.createHash('md5');
//  	hash.update(req.body.name+req.body.pass);
//  	var x = hash.digest('hex');
//  pool.getConnection(function (err,con) {
//      con.query('select * from user_info where user_account=?',[req.body.name],function (err,result) {
//      	console.log(result)
//      	if(result[0].hash==x){
//      		res.session.login='login';
//      		res.redirect('/admin')
//      	}else{
//      		res.redirect('/login')
//      	}
//      	
//      	
//      });
//  })
//})
//module.exports=route;


const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('../mysql');
const crypto = require('crypto');
router.get('/', (req, res) => {
    if (!req.cookies.hash) {
        res.sendFile(path.resolve('./www/views/login.html'));
        return;
    }
    mysql.query('select * from user_info where hash=?', [req.cookies.hash], function (err, result) {
        if (result.length === 0) {
            res.sendFile(path.resolve('./www/views/login.html'));
        } else {
            req.session.login = 'login';
            res.redirect('/admin');
        }
    })
})
router.post('/check', (req, res) => {
    console.log(req.body)
    var hash = crypto.createHash('md5');
    hash.update(req.body.name + req.body.pass);

    var x = hash.digest('hex');
    mysql.query('select * from user_info where user_account=?', [req.body.name], function (err, result) {
        if (result.length == 0) {
            res.redirect('/login');
        } else {
            if (result[0].hash == x) {
                console.log(req.body)
                req.session.login = 'login';
                if (req.body.rem) {
                    res.cookie('hash', result[0].hash, {path: '/', expires: new Date(Date.now() + 6000000)})
                }
                res.json('ok');
            } else {
                res.redirect('/login');
            }
        }
    })
})
module.exports = router;

const express=require('express');
const route=express.Router();
const path=require('path');
const mysql=require('../mysql.js');
const filename='./www/views/index/';
// app.use(express.static(path.resolve('www')));

///////////////////联系我们页面表单提交
route.post('/add_message',(req,res)=>{
    var sql='INSERT INTO message (mes_name, mes_phone, mes_email, mes_info) VALUES (?,?,?,?)';
    mysql.query(sql,[req.body.name,req.body.phone,req.body.email,req.body.message],(err,result)=>{
        if(!err){
            res.json('ok')
        }
    })
});
function request(dir='index.html',a='/',b='') {
    route.get(a+b,(req,res)=>{
        res.sendFile(path.resolve(filename+dir))
    });
}
request();
//////////////////
request('brand.html','/brand');
request('news_detail.html','/brand/',':list_id');
///////////////////
request('contact.html','/contact');
request('news_detail.html','/contact/',':list_id');
//////////////////
request('join.html','/join');
request('news_detail.html','/join/',':list_id');
/////////////////
request('slimming.html','/slimming');
request('news_detail.html','/slimming/',':list_id');
///////////////////
request('book.html','/book');
request('news_detail.html','/book/',':list_id');




route.get('/index/:cate_id/:cate',(req,res)=>{
    res.end(req.params.cate_id+','+req.params.cate);//根据req.params.cate_id利用where条件做检索
    // res.sendFile()
});
// fetch('/news/1').then(res)=>res.json()).then(data){
//     console.log(data)
// }
// fetch('/news/1')
//location.pathname
//后台我的信息页面
module.exports=route;
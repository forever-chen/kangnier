const express=require('express');
const path=require('path');
const route=express.Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const async=require('async');
const fs=require('fs');
const filename='./www/views/admin/';
// route.get('/',(req,res)=>{
//     res.sendFile(path.resolve('./www/views/admin/admin.html'))
// });
//////////////////////////////////管理者图片上传
route.post('/upload', upload.single('avatar'), function (req, res) {
  async.series([
    function (callback) {
      fs.createReadStream(req.file.path).pipe(fs.createWriteStream('www/public/img/' + req.file.filename));
      callback(null);
    },
    function (callback) {
      fs.unlink(path.resolve(req.file.path));
      callback(null);
    }
  ], function () {
    res.end('/imgs/' + req.file.filename);
  });

});


/////////////////////////////////////////后台路由管理
function request(dir='admin.html',a='/') {
    route.get(a,(req,res)=>{
        res.sendFile(path.resolve(filename+dir))
    });
}
request();
//////////////////
request('fnav.html','/fnav');

///////////////////
request('news.html','/news');

//////////////////
request('fu.html','/rich');

/////////////////
request('message.html','/message');

///////////////////
request('company.html','/company');
///////////////////
request('video.html','/video');
module.exports=route;


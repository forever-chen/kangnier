const express=require('express');
const path=require('path');
const route=express.Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const async=require('async');
const fs=require('fs');
const mysql=require('../mysql');
const filename='./www/views/admin/';
// route.get('/',(req,res)=>{
//     res.sendFile(path.resolve('./www/views/admin/admin.html'))
// });
///////////////////////////////////后台首页内容更改
route.post('/add_message',(req,res)=>{
    mysql.query('update user_info set (user_account,user_name,user_password,user_phone) where p_id=?',[req.body.account,req.body.name,req.body.password,req.body.phone],(err,result)=>{
        res.json('ok');
    })
})



///////////////////////////////////单页内容上传
route.post('/rich_upload',(req,res)=>{
    mysql.query('update page set p_con=? where p_id=?',[req.body.con,req.body.id],(err,result)=>{
        res.json('ok');
    })
})

//////////////////////////////////单页内容获取
route.post('/rich_download',(req,res)=>{
    mysql.query('select * from page where p_id=?',[req.body.id],(err,result)=>{
        res.json(result);
    })
})
//////////////////////////////////留言信息页面信息获取
route.post('/message',(req,res)=>{
    mysql.query('select * from message',(err,result)=>{
        res.json(result);
    })
})
//////////////////////////////////留言信息删除
route.post('/delmes',(req,res)=>{
    mysql.query('delete from message where mes_id=?',[req.body.id])
})
//////////////////////////////////公司信息页面信息获取
route.post('/company',(req,res)=>{
    mysql.query('select * from company',(err,result)=>{
        res.json(result);
    })
});
//////////////////////////////////公司信息页面添加
route.post('/add_company',(req,res)=>{
    let sql='INSERT INTO `company`(`con_id`, `city`, `section`, `name`, `email`, `phone`, `state`) VALUES (?,?,?,?,?,?,?)';
    mysql.query(sql,['','','','','','',''],(err,result)=>{
        if(!err){
           res.json(result.insertId);
        };
    })
});
//////////////////////////////////公司信息页面更新
route.post('/update_company',(req,res)=>{
   let sql=`update company set ${req.body.key}=? where con_id=?`;
   mysql.query(sql,[req.body.value,req.body.index],(err,result)=>{
       res.json('ok')
   })
});
//////////////////////////////////公司信息是否推荐到首页
route.post('/switchcom',(req,res)=>{
    let sql=`update company set state = ? where con_id=?`;
    mysql.query(sql,[req.body.value,req.body.id],(err,result)=>{
        res.json('ok')
    })
});
//////////////////////////////////公司信息页面删除
route.post('/del_company',(req,res)=>{
    let sql='delete from company where con_id=?';
    mysql.query(sql,[req.body.id],(err,result)=>{
        if(!err){
            res.json('ok')
        };
    })
});
//////////////////////////////////后台登录页面初始化
route.post('/init',(req,res)=>{
    mysql.query('select * from user_info',(err,result)=>{
        res.json(result);
    })
});
//////////////////////////////////单页列表获取
route.post('/page',(req,res)=>{
    mysql.query('select * from page',(err,result)=>{
        res.json(result);
    })
});
//////////////////////////////////一级导航列表获取
route.post('/navlist',(req,res)=>{
    mysql.query('select * from navlist',(err,result)=>{
        res.json(result);
    })
});
//////////////////////////////////更改二级页面banner图
route.post('/changenav',(req,res)=>{
    mysql.query('update navlist set state=? where nav_id=?',[req.body.state,req.body.id],(err,result)=>{
       if(!err){
           res.json('ok')
       };
    })
});
//新闻页面查找
route.post('/nav/all',(req,res)=>{
    mysql.query('select * from cate',(err,data)=>{
        res.json(data);
    })
});
//新闻页面删除
route.get('/nav/del/:id',(req,res)=>{
    let sql="DELETE FROM `cate` WHERE id=?"
    mysql.query(sql,[req.params.id],(err,result)=>{
        res.redirect('/admin/nav')
    })
});
//新闻页面添加
route.post('/nav/push',(req,res)=>{
    let sql="INSERT INTO `cate`( `catename`, `pid`, `url`) VALUES (?,?,?)";
    mysql.query(sql,['','',''],(err,result)=>{
        if(err){
            res.json(err);
        }
    })
});
//新闻页面修改
route.post('/nav/update',(req,res)=>{
    let sql=`UPDATE cate SET ${req.body.key}=? WHERE id=?`
    mysql.query(sql,[req.body.value,req.body.index],(err,result)=>{
    })
});
//////////////////////////////////选项卡导航列表获取
route.post('/newslist',(req,res)=>{
    mysql.query('select * from slimming',(err,result)=>{
        res.json(result);
    })
});
//////////////////////////////////管理者图片上传
route.post('/upload', upload.single('avatar'), function (req, res) {
  async.series([
    function (callback) {
      fs.createReadStream(req.file.path).pipe(fs.createWriteStream('./www/public/img/' + req.file.filename));
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




route.post('/news_detail',(req,res)=>{
    mysql.query('select * from news_detail where sli_id=?',[req.body.id],(err,result)=>{
        res.json(result);
    })
})


/////////////////////////////////////新闻内容页添加一条
route.post('/add_news/:id',(req,res)=>{
    var sql='INSERT INTO news_detail ( etitle, ctitle, pic, econ, ccon, state, sli_id) VALUES ("","","","","","",?)';
    mysql.query(sql,[req.params.id],(err,result)=>{
        if(!err){
            res.json(result.insertId);
        }
    })
})
/////////////////////////////////////新闻内容页删除一条
// mysql.query 执行sql 语句
// 第一个 sql,
// 数组
// 回调函数
route.post('/del_news',(req,res)=>{
    mysql.query('delete from news_detail where info_id=?',[req.body.id],(err,result)=>{
        res.json('ok');
    })
})





/////////////////////////////////////////后台路由管理
function request(dir='admin.html',a='/') {
    route.get(a,(req,res)=>{
        res.sendFile(path.resolve(filename+dir))
    });
}
request();
//////////////////二级导航列表
request('zk_sli.html','/navlist');
///////////////////
request('news.html','/news/:news_id');
request('redact.html','/news/:news_id/:info_id');
//////////////////
// request('fu.html','/rich');
request('fu.html','/page/:page_id');

/////////////////
request('message.html','/message');
/////////////////
request('zqy_details.html','/nav');
///////////////////
request('company.html','/company');
///////////////////
request('video.html','/video');

module.exports=route;


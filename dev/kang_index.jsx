const React=require('react');
const ReactDOM=require('react-dom');
const common = require('./common.jsx');
const rsx_ideals = require('./rsx_ideals.jsx');
const rsx_index = require('./rsx_index.jsx');
const rsx_trends = require('./rsx_trends.jsx');
const cyh_about=require('./cyh_about.jsx');
const cyh_join=require('./cyh_join.jsx');
const cyh_contact=require('./cyh_contact.jsx')
class Kang_index extends React.Component{
    render(){
        return(
            <div>
                <common.Tn/>
                <common.banner/>
                <rsx_ideals.Rsx_carnel Carnel={Carnel}/>
                <rsx_index.Rc carousel={carousel}/>
                <rsx_trends.Rt trend={trend}/>
                <cyh_about.Ca/>
                <cyh_join.Cj pic={cyh_pic}/>
                <cyh_contact.Cc data={joindata}/>
                <common.Bt/>
            </div>
        )
    }
}
var Carnel=[
    {
        id:1,
        name:'拓客宝典',
        content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
        img1:'/public/img/ideals1.png',
        img2:'/public/img/ideals11.png',
    },
    {
        id:2,
        name:'减肥效果',
        content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
        img1:'/public/img/ideals2.png',
        img2:'/public/img/ideals22.png',
    },
    {
        id:3,
        name:'减肥助手',
        content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
        img1:'/public/img/ideals3.png',
        img2:'/public/img/ideals33.png',
    },
    {
        id:4,
        name:'中国好身材',
        content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
        img1:'/public/img/ideals4.png',
        img2:'/public/img/ideals44.png',
    }
];
var carousel=[
    {
        id:1,
        head:'/public/img/touxiang.jpg',
        tact:'HOLIDAY PROMOTION',
        name:'节假日促销',
        content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
    },
    {
        id:2,
        head:'/public/img/touxiang.jpg',
        tact:'Slimming franchise',
        name:'减肥加盟店',
        content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
    },
    {
        id:3,
        head:'/public/img/touxiang.jpg',
        tact:'Holiday promotion',
        name:'节假日促销',
        content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
    }
];
var trend=[
    {id:1,name:'入住美国',eng:'Settled in the United States',content:'恭贺康伲尔荣获加州中医针灸师联合工会颁发世界杰出减肥瘦身奖',
        img1:'/public/img/trends1.png',
        img2:'/public/img/trend11.png'
    },
    {id:2,name:'惊艳时光',eng:'Settled in the United States',content:'惊艳时光，感恩同行，因为有梦所以更远康伲尔2015广州全国会实录',
        img1:'/public/img/trends2.png',
        img2:'/public/img/trend22.png'
    },
    {id:3,name:'入住美国',eng:'Settled in the United States',content:'恭贺康伲尔荣获加州中医针灸师联合工会颁发世界杰出减肥瘦身奖',
        img1:'/public/img/trends3.png',
        img2:'/public/img/trend33.png'
    },
    {id:4,name:'惊艳时光',eng:'Settled in the United States',content:'惊艳时光，感恩同行，因为有梦所以更远康伲尔2015广州全国会实录',
        img1:'/public/img/trends1.png',
        img2:'/public/img/trend11.png'}
];
var cyh_pic = [
    {src: '/public/img/cyh_2.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'},
    {src: '/public/img/cyh_3.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'},
    {src: '/public/img/cyh_4.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'}
];
var joindata=[
    {src:"\ue625",phone:'全国免费招商热线：400-666-3288',zixun:'咨询热线：010-65664088',QQ:'QQ：2894246186 '},
    {src:'\ue632',phone:'减肥瘦身加盟热线：13601082055',zixun:'友情链接：减肥加盟',QQ:'QQ：2894246186'},
    {src:'\ue610',phone:'总部地址：北京市通州区纳特园区8层 营运中心',zixun:'营运中心：山西太原长风大街长风',QQ:'画卷A座2 单元三层'}
];


ReactDOM.render(<Kang_index/>,document.getElementById('kang_index'));
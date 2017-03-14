const React = require('react');
const ReactDOM = require('react-dom');
const Zcommon = require('./Zcommon.jsx');
const common = require('./common.jsx');
class Body extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.change=this.change.bind(this)
    }
    change(i){
        this.setState((ps)=>({index:i}))
    }
    render(){
        return(
            <div>
                <common.second data={banner}/>
                <common.Tn data={xdata}/>
            <div className="z_body">
                <div className="topLine"></div>
                <div className="crumbs">
                    <a href="">首页</a>
                    <span> > </span>
                    <a href="">减肥百科</a>
                    <span> > </span>
                    <a href="" className="in">康伲尔八月案例之享“瘦“生活，幸福人生</a>
                </div>
                <div className="xdz_body">
                      <div className="xdz_tit">
                    <h1 className="xdz_h1">
                       康伲尔三月案例之享“瘦“生活，幸福人生
                    </h1>
                    <span>2017.3.7</span>
                </div>
                <p className="xdz_cont">康伲尔杯“中国好身材，享瘦你就来”经过近两个月的减肥狂潮，全国各地的达人们收获的不仅仅是体重的下降，傲人的身材，更变身成为了养生专家，对健康的养生观念有了新的认识。各位达人纷纷自信的表示，2017一定会无比幸福，现在的口头禅都成了“今天你瘦了多少”？</p>
                <div className="xdz_imgbox">
                    <img src="/public/img/banner2.png"/>
                </div>
                 <div className="xdz_co">2017年3月7日下午，56位优秀的康伲尔家人，做客中央电视台大演播厅，共同参加央视“见证企业成长”高端访谈节目。郭总、黄总这对被业界称为“神雕侠侣”的创业夫妻档，用他们14年的敬业与专业，打造中国好身材，塑造健康新生活，让天下人健康长寿！</div>
                <div className="xdz_line">
                  <div className="xdz_l">
                     <a href="#">上一篇 : 模式定天下,成交赢未来</a>
                  </div>
                   <div className="xdz_r">
                     <a href="#">上一篇 : 模式定天下,成交赢未来</a>
                  </div>
                 
                </div>
                </div>
             
            </div>
                <common.Bt data2={xdata2}/>
            </div>
        )
    }
}


var TabData=["减肥效果","中国好身材","最新活动","减肥助手"];


var xdata=[
    {nav:'品牌介绍',ying:'Introduction'},{nav:'新闻中心',ying:'News center'},{nav:'招商加盟',ying:'investment'},{nav:'拓客宝典',ying:'guest book'},{nav:'减肥百科',ying:'slimming key'},{nav:'商学院',ying:'commercial'},{nav:'联系我们',ying:'contact us'}
]
var xdata2=[
    {title:'最新动态',content:{a:'滴滴瘦身',b:'康伲尔排毒套',c:'康伲儿至尊御臂',d:'康伲儿至尊御臂',e:'康伲儿集团大事记'}},{title:'加盟指南',content:{a:'投资分析',b:'加盟流程',c:'加盟条件',d:'加盟级别',e:'零风险处理'}},{title:'减肥百科',content:{a:'康伲儿·V脸',b:'中国好身材',c:'最新活动',d:'减肥助手',e:'拓客宝典'}},{title:'康尼尔品牌',content:{a:'董事长助手',b:'品牌简介',c:'品牌荣誉',d:'团队风采',e:'企业文化'}}
]
var banner=['/public/img/banner4.png'];
ReactDOM.render(<Body TabData={TabData} />, document.getElementById('page'));

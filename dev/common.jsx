const React = require('react');
const banner = ['/public/img/banner1.png', '/public/img/banner2.png', '/public/img/banner3.png'];
var data0=[
    {src:'/brand',nav:'品牌介绍',ying:'Introduction'},{src:'/join',nav:'招商加盟',ying:'investment'},{src:'/brand/1',nav:'新闻中心',ying:'News center'},{src:'/book',nav:'拓客宝典',ying:'guest book'},{src:'/slimming',nav:'减肥百科',ying:'slimming key'},{src:'http://www.carnel.cn/knesxy/',nav:'商学院',ying:'commercial'},{src:'/contact',nav:'联系我们',ying:'contact us'}
]
var data2=[
    {title:'最新动态',content:{a:'滴滴瘦身',b:'康伲尔排毒套',c:'康伲儿至尊御臂',d:'康伲儿至尊御臂',e:'康伲儿集团大事记'}},{title:'加盟指南',content:{a:'投资分析',b:'加盟流程',c:'加盟条件',d:'加盟级别',e:'零风险处理'}},{title:'减肥百科',content:{a:'康伲儿·V脸',b:'中国好身材',c:'最新活动',d:'减肥助手',e:'拓客宝典'}},{title:'康尼尔品牌',content:{a:'董事长助手',b:'品牌简介',c:'品牌荣誉',d:'团队风采',e:'企业文化'}}
]
//移入切换组件
class Penel extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <ul className="rsx_name">
                {this.props.PEN.map((v,i)=>
                    <div key={i}>
                        <li  className="rsx_one">
                            <div className="rsx_font" style={{color:(v.id==1?'#fff':'#0a0a0a')}}>{v.name}</div>
                            <div className="Topdian">
                                <div className="topmin" style={{background:(v.id==1?'#fff':'#0a0a0a')}}></div>
                                <div className="topmax" style={{background:(v.id==1?'#fff':'#0a0a0a')}}></div>
                            </div>
                        </li>
                        <br/>
                        <li className="two" style={{color:(v.id==1?'#fff':'#0a0a0a')}}>
                            {v.tiller}
                        </li>

                        <li className="four" style={{background:(v.id==1?'#fff':'#0a0a0a')}}></li>

                        <li className="three" style={{color:(v.id==1?'#fff':'#0a0a0a')}}>
                            {v.content}
                        </li>
                    </div>
                )}
            </ul>
        )
    }
}
//banner 组件
class Banner extends React.Component {//顶层组件
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.click=this.click.bind(this);
        // this.componentWillUnMount = this.componentWillUnMount.bind(this);
    }
    componentDidMount(){//生命周期函数
        var t=setInterval(()=>{
            var id=this.state.index;
            this.setState((ps)=>({
                index:(id=id+1>this.props.data.length-1?0:id+1)
            }))
        },4000)
    }
    // componentWillUnMount() {
    //     clearInterval(t);//FIXME:无法实现卸载时清除计时器
    // }
    click(id){
        // clearInterval(t);
        this.setState((ps)=>({index:id}))
    }
    render() {
        return (
            <div className="banner-bg">
                <Items data={this.props.data} index={this.state.index}/>
                <Btns data={this.props.data} index={this.state.index} fun={this.click}/>
            </div>
        )
    }
}
class Items extends React.Component {
    render() {
        var image = this.props.data.map((v, i) => <div className="item" key={i} style={{backgroundImage: `url(${v})`,opacity:(i==this.props.index?'1':'0')}} ></div>);
        return (
            <div className="items-img">
                {image}
            </div>
        )
    };
}
class Btns extends React.Component {
    render() {
        var slides= this.props.data.map((v,i)=> <div className="slides" key={i}  onClick={()=>this.props.fun(i)}><div className="lllll" style={{background:(i==this.props.index?'#EC4998':'white')}}></div></div>);
        return (
            <div className="banner-btn">
                {slides}
            </div>
        )
    }

}
class App extends React.Component {
    render() {
        return (
            <div id="banner">
                <Banner data={banner}/>
            </div>
        )
    }
}

//二级页面banner组件
class Second extends React.Component{
    render() {
        var image = this.props.data.map((v, i) => <div className="second-img" key={i} style={{backgroundImage: `url(${v})`}}></div>);
        return (
                <div>
                    <div className="second-bg">
                    {image}
                    </div>
                </div>

        )
    };
}
//顶部导航组件
class Topnav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:0
        };
    }
    render(){
        var navs=data0.map((v,i)=>
            <li key={i}  onClick={this.click}>
                <span>·</span>
                <a href={v.src} className="xdz_a" key={i}>{v.nav}</a>
                <span>·</span>
                <div className="xdz_hover">{v.ying}</div>
            </li>)
        return(
            <div className="xdz_nav">
                <div className="xdz_nav_left">
                    <a href="/"><img src="/public/img/xdz_nav.png"/></a>
                </div>
                <ul className="xdz_nav_right">
                    {navs}
                </ul>
            </div>
        )
    }
}
//底部导航组件
class Bottom extends React.Component{
    render(){
        var title=data2.map((v,i)=>
            <ul className="xdz_iiiii" key={i}>
                <div className="xdz_title">{v.title}</div>
                <li><a href="">{v.content.a}</a></li>
                <li><a href="">{v.content.b}</a></li>
                <li><a href="">{v.content.c}</a></li>
                <li><a href="">{v.content.d}</a></li>
                <li><a href="">{v.content.e}</a></li>
            </ul>)
        return(
            <div className="xdz_bottom">
                <div className="xdz_bottom_inner">
                    <div className="xdz_bottom_box">
                        {title}
                        <div className="xdz_bottom_mabox">
                            <div className="xdz_erweima">
                                <img src="/public/img/xdz_bottom_ma.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = {
    banner: App,
    second:Second,
    Tn:Topnav,
    Bt:Bottom,
    pn:Penel
};
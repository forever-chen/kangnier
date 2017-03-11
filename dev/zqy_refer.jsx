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
                <common.Tn/>
            <div className="z_body" >
                <div className="topLine"></div>
                <div className="crumbs">
                    <a href="/">首页</a>
                    <span> > </span>
                    <a href="" className="in">减肥百科</a>
                </div>
                <Zcommon.tab TabData={this.props.TabData} change={this.change} index={this.state.index}/>
                <H Hdata={Hdata}/>
                <R data={data}/>
                {ad}
            </div>
                <common.Bt/>
            </div>
        )
    }
}

class R extends React.Component {
    render() {
        const lists = this.props.data.map((v, i) => {
            return (
            <div className="z_refer" key={i}>
                <div className="left">
                        <img src={v.Zimg} alt=""/>
                    </div>
                    <div className="right">
                        <div className="top">
                            <img className="num" src={v.Znum} alt=""/>
                            <img src="/public/img/z_咨询_05.png" alt="" className="logo"/>
                            <h2>{v.h2}</h2>
                        </div>
                        <div className="content">
                            <h1>{v.t1}</h1>
                            <h2>{v.t2}</h2>
                            <a className="more">查看详情</a>
                        </div>
                    </div>
                </div>)
        });
        return (
            <div className="z_re">
                <div className="z_titlebox">
                    <h1>SLIMMING</h1>
                    <h2>EFFECT</h2>
                    <h3>Diet Encyclopedia</h3>
                    <span>全 / 部 / 咨 / 询</span>
                </div>
                {lists}
            </div>
        )
    }
}

//广告位图片
var adimg=[{pic:'/public/img/z_ad.png'}]
var ad=(
    <div className="ad">
        <img src={adimg[0].pic} alt=""/>
    </div>
);

//hot
class H extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const listsH = this.props.Hdata.map((v, i) => {
            return (
                <div className="z_content" key={i}>
                    <div style={{float:(i%2===0)?'left':'right'}} className="imgBox">
                        <div className="bigBox">
                            <img src={v.Cimg}  alt="" className="Cimg"/>
                        </div>
                        <img style={{right:(i%2===0)?'-28px':'423px'}} src="/public/img/z_jia.png" alt="" className="Cadd"/>
                    </div>

                    <div style={{float:(i%2===0)?'right':'left'}} className="Cclass">
                        <h1>{v.h1}</h1>
                        <span className="t1">{v.t1}</span>
                        <span className="t2">{v.t2}</span>
                        <span className="t3">{v.t3}</span>
                        <span className="t4">{v.t4}</span>
                    </div>
                </div>)
        })
        return (
            <div className="z_hot">
                <div className="z_titlebox">
                    <h1>SLIMMING</h1>
                    <h2>EFFECT</h2>
                    <h3>Diet Encyclopedia</h3>
                    <span>今 / 日 / 热 / 点</span>
                </div>
                {listsH}
            </div>
        )
    }
}

var TabData=["减肥效果","中国好身材","最新活动","减肥助手"];
var data = [
    {
        Zimg: '/public/img/z_咨询_03.png',
        Znum: '/public/img/热点_07.png',
        h2: '康伲尔八月案例之享“瘦“生活，幸福人生',
        t1: '中国专业减肥十大品牌、减肥美体领军品牌、体重控制国家标准起草单位、十五年市场验证，已为上百万名顾客成功减重。',
        t2: 'Chinese professional lose ten big brand, the leading brand of body weight loss and weight control, the drafting of national standards'
    },{
        Zimg: '/public/img/z_咨询_03.png',
        Znum: '/public/img/热点_10.png',
        h2: '康伲尔八月案例之享“瘦“生活，幸福人生',
        t1: '中国专业减肥十大品牌、减肥美体领军品牌、体重控制国家标准起草单位、十五年市场验证，已为上百万名顾客成功减重。',
        t2: 'Chinese professional lose ten big brand, the leading brand of body weight loss and weight control, the drafting of national standards'
    },{
        Zimg: '/public/img/z_咨询_03.png',
        Znum: '/public/img/热点_14.png',
        h2: '康伲尔八月案例之享“瘦“生活，幸福人生',
        t1: '中国专业减肥十大品牌、减肥美体领军品牌、体重控制国家标准起草单位、十五年市场验证，已为上百万名顾客成功减重。',
        t2: 'Chinese professional lose ten big brand, the leading brand of body weight loss and weight control, the drafting of national standards'
    },{
        Zimg: '/public/img/z_咨询_03.png',
        Znum: '/public/img/热点_16.png',
        h2: '康伲尔八月案例之享“瘦“生活，幸福人生',
        t1: '中国专业减肥十大品牌、减肥美体领军品牌、体重控制国家标准起草单位、十五年市场验证，已为上百万名顾客成功减重。',
        t2: 'Chinese professional lose ten big brand, the leading brand of body weight loss and weight control, the drafting of national standards'
    },
]
var Hdata = [
    {
        Cimg: '/public/img/热点_03.png',
        h1: '分享达人经验让减肥更轻松',
        t1: 'Share experience to lose ',
        t2: 'weight easier',
        t3: '当你所有减肥失败时，请选择康伲尔。康伲尔在科学、健康前提下减肥，对身体没有任何副作用。',
        t4: 'When you all failed to lose weight, please choose the Kang Ni er. Conniel in science,health, comfort, safety, weight loss, no side effects on the body.'
    },
    {
        Cimg: '/public/img/热点_03.png',
        h1: '分享达人经验让减肥更轻松',
        t1: 'Share experience to lose ',
        t2: 'weight easier',
        t3: '当你所有减肥失败时，请选择康伲尔。康伲尔在科学、健康前提下减肥，对身体没有任何副作用。',
        t4: 'When you all failed to lose weight, please choose the Kang Ni er. Conniel in science,health, comfort, safety, weight loss, no side effects on the body.'
    }
];

var banner=['/public/img/banner4.png'];
ReactDOM.render(<Body TabData={TabData} />, document.getElementById('page'));

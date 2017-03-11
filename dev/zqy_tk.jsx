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
        const lists = this.props.data.map((v, i) => {
            return (
                <div key={i} className="z_tk">
                    <div className="top">
                        <div className="Text tText">
                            <h1>{v.text.h1}</h1>
                            <h2>{v.text.t1}</h2>
                            <h3>{v.text.s1}</h3>
                        </div>
                        <div className="tImg Img">
                            <div className="black"></div>
                            <img src={v.img1} alt=""/>
                        </div>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="Img">
                                <div className="black"></div>
                                <img src={v.img2} alt=""/>
                            </div>
                            <div className="Text">
                                <h1>{v.text.h2}</h1>
                                <h2>{v.text.t2}</h2>
                                <h3>{v.text.s2}</h3>
                                <div className="btn btn1">
                                    <img src='/public/img/btn_10.png' alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="Text Text2">
                                <h1>{v.text.h3}</h1>
                                <h2>{v.text.t3}</h2>
                                <h3>{v.text.s3}</h3>
                                <div className="btn btn2">
                                    <img src='/public/img/btn_10.png' alt=""/>
                                </div>
                            </div>
                            <div className="Img">
                                <div className="black"></div>
                                <img src={v.img3} alt=""/>
                            </div>
                            <div className="Img">
                                <div className="black"></div>
                                <img src={v.img4} alt=""/>
                            </div>
                            <div className="Text">
                                <h1>{v.text.h4}</h1>
                                <h2>{v.text.t4}</h2>
                                <h3>{v.text.s4}</h3>
                                <div className="btn btn3">
                                    <img src='/public/img/btn_10.png' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <common.second data={banner}/>
                <common.Tn/>
                <div className="z_body" >
                    <div className="topLine"></div>
                    <div className="crumbs">
                        <a href="/">首页</a>
                        <span> > </span>
                        <a href="">拓客宝典</a>
                        <span> > </span>
                        <a href="" className="in">拓客宝典</a>
                    </div>
                    <Zcommon.tab TabData={this.props.TabData} change={this.change} index={this.state.index}/>
                    <div className="z_titlebox">
                        <h1>SLIMMING</h1>
                        <h2>EFFECT</h2>
                        <h3>Diet Encyclopedia</h3>
                        <span>拓 / 客 / 宝 / 典</span>

                    </div>
                    {lists}
                    {ad}
                </div>
                <common.Bt/>
            </div>

        )
    }
}
var TabData=["拓客宝典","视频中心"];
var banner=['/public/img/banner4.png'];

var data = [
    {
        img1: '/public/img/z_tk_03.png',
        img2: '/public/img/z_tk_06.png',
        img3: '/public/img/z_tk_08.png',
        img4: '/public/img/z_tk_10.png',
        text: {
            h1: '康伲尔最强喜事',
            t1: 'Kangnier the best happy event network qianmai total',
            s1: '康伲尔最强喜事，人脉钱脉全收',
            h2: '微拓帝国席卷全城',
            t2: 'Weituo empire swept through the city of weituodiguo ',
            s2: '微拓帝国席卷全城 微拓帝国闪电拓客',
            h3: '封面女郎 魅力定制',
            t3: 'Join the star exclusive photog raphy team circle your star ',
            s3: '联手明星专属摄影团队圆你心中明星梦',
            h4: '康伲尔杯好身材',
            t4: 'Kangnierbei " Chinas body " slim you come.',
            s4: '康伲尔杯"中国好身材"享瘦你就来',

        }
    }
];
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

ReactDOM.render(<Body data={data} TabData={TabData} />, document.getElementById('tk'));

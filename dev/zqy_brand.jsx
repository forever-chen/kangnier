const React=require('react');
const ReactDOM=require('react-dom');
const common=require('./common.jsx');
const Zcommon = require('./Zcommon.jsx');
const arr=['/public/img/banner3.png'];//二级页面banner图片
class Content extends React.Component{
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
            <div id="content">
                <div className="topLine"></div>
                <div className="crumbs">
                    <a href="/">首页</a>
                    <span> > </span>
                    <a href="" className="in">品牌介绍</a>
                </div>
                <Zcommon.tab TabData={this.props.TabData} change={this.change} index={this.state.index} />
                <div className="lq_title"></div>
                <div className="lq_pic">
                    <img src="/public/img/lq_brand.png" alt=""/>
                </div>
                <div className="lq_introduction">
                    <div className="int-first">
                    <p className="title one">打造世界级的高端人士优质生活服务平台</p>
                    <p className="title two">康尼尔为你而来</p>
                    <p className="article">康伲尔公司成立于2001年，是一家集营销策划、培训教育、品牌推广、产品研发及售后服务于一体的专业化减肥、瘦身、纤体连锁机构，致力于减肥美体项目的深度开发,立志打造国际专业瘦身、纤体航母，在全国各地拥有2360家特许加盟店，帮助数百万顾客成功瘦身，重新获得自信、美丽！</p>
                    <p className="article-english">Kang Ni Er company was founded in 2001, is a set of marketing planning, education and training, brand promotion, product development and customer service service in one of the specialized diet, slimming slimming, chain, is committed to the depth of the development of body weight loss of the project, to create international professional slimming slimming carrier, has 2360 franchised stores in all over the country, helping millions of customers successfully, to regain confidence, beauty</p>
                    </div>
                    <div className="int-second">
                        <p className="sec-title">康尼尔开创健康产业新篇章</p>
                        <p className="sec-tit-eng">Cornier to create a new chapter in the health industry</p>
                        <p className="article">近年来，康伲尔积极致力于专业减肥、肥胖预防、体重控制领域的国家标准的制定，打造世界级的高端人士优质生活服务平台！2013年，康伲尔品牌成为央视网减肥美体行业唯一战略合作伙伴，《体重控制国家标准》起草单位。依托国家级网络媒体平台的强大支持，通过央视网独一无二的品牌认知度及公信力，借助央视权威化、国际化的网络平台，强势走向世界！引领行业发展新方向，开创健康产业新篇章！</p>
                    </div>
                    <div className="int-second">
                        <p className="sec-title">企业愿景</p>
                        <p className="sec-tit-eng">Cornier corporate vision</p>
                        <p className="article">企业愿景：到2018年，成为国际一流的养生减肥连锁机构，内部培养5000位股东，500位百万富翁，50位千万富翁，5-10位亿万富翁，年营业额突破30亿元，成功上市并在股票市场有优异表现，代表专业减肥的最高水平，走出中国，走向世界。去影响世界，改变世界。为伟大的祖国赢得荣誉！</p>
                    </div>
                </div>
                {ad}
            </div>
        );
    }
};
var adimg=[{pic:'/public/img/z_ad2.png'}]
var ad=(
    <div className="ad">
        <img src={adimg[0].pic} alt=""/>
    </div>
);
class Brand extends React.Component{

    render(){
        return(
            <div>
                <common.Tn/>
                <common.second data={arr}/>
                <Content TabData={TabData}/>
                <common.Bt/>
            </div>
        )
    }
}
var TabData=["董事长介绍","品牌荣誉","团队风采","企业文化"];
ReactDOM.render(<Brand />, document.getElementById('brand'));
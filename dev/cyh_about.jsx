const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
class Cyh_video extends React.Component {
    render() {
        return (
            <div className="cyh_video">
                <video id="really-cool-video" className="cyh_v video-js vjs-default-skin vjs-big-play-centered" controls
                       preload="auto" width="640" height="264" poster="/public/img/cyh_1.gif"
                       data-setup='{}'>
                    <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
                    <source src="http://vjs.zencdn.net/v/oceans.webm" type='video/webm'/>
                        <source src="http://vjs.zencdn.net/v/oceans.ogv" type='video/ogg'/>
                </video>
                {/*<video src="/public/img/movie(2).ogg" className="cyh_v" poster="/public/img/cyh_1.gif"*/}
                       {/*controls="controls"></video>*/}
            </div>

        )
    }
}
class Cyh_right extends React.Component {
    render() {
        return (
            <div className="cyh_right" style={{'fontSize': '36px', 'width': '512px'}}>
                <span style={{'fontFamily': 'kang-bold'}}>CARNAL'S</span>
                <span style={{'fontFamily': 'kang-Thin'}}> JOURENY</span>
                <p style={{'fontSize': '24px', 'color': '#8d8d8d'}}>回忆之旅-康伲尔陪你的每一段回忆</p>
                <div className="cyh_line"></div>
                <p style={{'fontSize': '14px', 'marginBottom': '15px', 'lineHeight': '22px', 'color': '#8d8d8d'}}>
                    康伲尔公司成立于2001年，是一家集营销策划、培训教育、品牌推广、产品研发及售后服务于一体的专业化减肥、瘦身、纤体连锁机构，致力于减肥美体项目的深度开发立志打造国际专业瘦身、纤体航母，在全国各地拥有2360家特许加盟店身……</p>
                <p style={{'fontFamily': 'kang-Regular', 'fontSize': '14px', 'lineHeight': '22px', 'color': '#8d8d8d'}}>
                    Over the years we have always firmly believe that we all success and progress comes from our hard
                    professional partners,and our respected customers.customers.customers.</p>
            </div>
        )
    }
}
class Cyh_about extends React.Component {
    render() {
        return (
            <div className="cyh_videonei">
                <div className="cyh_nei">
                    <common.pn PEN={PEN}/>
                    <Cyh_video/>
                    <Cyh_right/>
                </div>
            </div>
        )
    }
}
const PEN = [
    {id: 2, name: 'about us', title: '关于我们', content: 'To provide customers with excellent products'}
];
module.exports = {
    Ca: Cyh_about
};
// ReactDOM.render(<Cyh_about PEN={cyh_title}/>,document.getElementById('cyh_about'))

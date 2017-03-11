const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
class Cyh_join extends React.Component {
    render() {
        return (
            <div className="cyh_join_nei">
                <common.pn PEN={PEN}/>
                <div className="cyh_bot">
                    <div className="cyh_zhe"></div>
                    {this.props.pic.map((v, i) => <div className="cyh_every" key={i} id={i == 1 ? 'cyh_big' : ''}>
                        <div className="cyh_inner">
                            <img src={v.src} alt=""/>
                            <div className="cyh_leader cyh_titlell">{v.title}</div>
                            <div className="cyh_leader cyh_sale">{v.sale}</div>
                            <a href="">
                                <div className="cyh_leader cyh_more">查看更多</div>
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}
// var cyh_pic = [
//     {src: '/public/img/cyh_2.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'},
//     {src: '/public/img/cyh_3.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'},
//     {src: '/public/img/cyh_4.gif', title: '康伲尔东平减肥加盟店', sale: '正在营业…'}
// ];
const PEN = [
    {name: 'Join and case', title: '加盟案例', content: 'For human health and beauty to make the world a better place'}
]
module.exports={
    Cj:Cyh_join
};
// ReactDOM.render(<Cyh_join pic={cyh_pic} PEN={cyh_title}/>, document.getElementsByClassName('cyh_join')[0])
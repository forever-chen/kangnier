const React=require('react');
const ReactDom=require('react-dom');
const common = require('./common.jsx');
class Cyh_contact extends React.Component{
    render(){
        return(
            <div className="cyh_contact_nei">
                <common.pn PEN={PEN}/>
                {this.props.data.map((v,i)=>
                <div className="cyh_last" key={i}>
                    <div className="src"><span className="ali"><i className="iconfont" style={{fontSize:'36px',color:'white'}}>{v.src}</i></span></div>
                    <div className="cyh_bo phone">{v.phone}</div>
                    <div className="cyh_bo zixun">{v.zixun}</div>
                    <div className="cyh_bo QQ"><p>{v.QQ}</p></div>
                </div>
                )}
            </div>
        )
    }
}
// var data=[
//     {src:'/public/img/cyh_5.png',phone:'全国免费招商热线：400-666-3288',zixun:'咨询热线：010-65664088',QQ:'QQ：2894246186 '},
//     {src:'/public/img/cyh_6.png',phone:'减肥瘦身加盟热线：13601082055',zixun:'友情链接：减肥加盟',QQ:'QQ：2894246186'},
//     {src:'/public/img/cyh_7.png',phone:'总部地址：北京市通州区纳特园区8层 营运中心',zixun:'营运中心：山西太原长风大街长风',QQ:'画卷A座2 单元三层'}
// ];
const PEN = [
    {id:2, name: 'about us', title: '关于我们', content: 'To provide customers with excellent products'}
];
module.exports={
    Cc:Cyh_contact
};
// ReactDom.render(<Cyh_contact data={data} PEN={cyh_title}/>,document.getElementsByClassName('cyh_contact')[0]);
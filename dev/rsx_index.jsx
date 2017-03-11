//
const React=require('react');
const ReactDOM=require('react-dom');
const common=require('./common.jsx');

//轮播组件
class Rsxcarousel extends React.Component{
    render(){
        return(
            <div className="selection">
                {this.props.car.map((v,i)=>
                    <div className='log' id={this.props.id==i?'rsx_log':''} key={i} onMouseOver={()=>this.props.fun(i)} style={{marginRight: (v.id==3?0:60)}}>

                        <div className="bottom">
                            <img className="hei" src="/public/img/rsx_hei.png" alt=""/>
                            <img className="bai" src="/public/img/rsx_bai.png" alt=""/>
                        </div>

                        <ul className="top" key={i}>
                            <li className="head" ><img src={v.head} alt=""/></li>
                            <li className="fontone">{v.tact}</li>
                            <br/>
                            <li className="fonttwo">{v.name}</li>
                            <br/><br/>
                            <li className="fontthree">{v.content}</li>
                        </ul>
                        <div className="understand">
                            <p>了解详情</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
//btn
class BTN extends React.Component{
    render(){
        return(
            <ul className="rsx_btn">
                {this.props.bt.map((v,i)=>
                    <a href="javascript:;" onMouseOver={()=>this.props.fun(i)} key={i}><li className={this.props.id==i?'rsx_hover':''}></li></a>
                    )}

            </ul>
        )
    }
}
// 中区
class Rsxone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:1
        };
        this.mouse=this.mouse.bind(this);
    }
    mouse(aa){
        this.setState(
            (ps)=>({index:aa})
        )
    }
    render(){
        return(
            <div className="back">
                {/*dingbu*/}
                <common.pn PEN={PEN}/>
                {/*dingbu*/}
                <Rsxcarousel car={this.props.carousel} fun={this.mouse} id={this.state.index}/>
                <BTN bt={this.props.carousel} fun={this.mouse} id={this.state.index}>

                </BTN>
            </div>
        )
    }
}
var PEN=[
    {
        id:1,
        name:'Store and selection',
        title:'店面精选',
        content:'To build the best learning opportunities '
    }
];
module.exports={
    Rc:Rsxone
};
//
// var carousel=[
//     {
//         id:1,
//         head:'/public/img/touxiang.jpg',
//         tact:'HOLIDAY PROMOTION',
//         name:'节假日促销',
//         content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
//     },
//     {
//         id:2,
//         head:'/public/img/touxiang.jpg',
//         tact:'Slimming franchise',
//         name:'减肥加盟店',
//         content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
//     },
//     {
//         id:3,
//         head:'/public/img/touxiang.jpg',
//         tact:'Holiday promotion',
//         name:'节假日促销',
//         content:'如何让促销活动吸引住 顾客的眼球，如何能让顾客导 流到自己的减肥店'
//     }
// ]
// ReactDOM.render(<Rsxone carousel={carousel} />,document.getElementById('rsx_page'));
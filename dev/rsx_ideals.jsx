const React=require('react');
const ReactDOM=require('react-dom');
const common=require('./common.jsx');
var PEN=[
    {
        id:2,
        name:'Carnel ldeals',
        title:'康尼尔方案',
        content:'Bring economic returns and good social image '
    }
]
class Rsx_carnel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    render(){
        return(
            <div className="Ideals" >
                <common.pn PEN={PEN}/>
                <ul className="Rsxid" >
                    {this.props.Carnel.map((v,i)=>
                        <li className='rsx_car' id={this.state.index==i?'rsx_nel':''} key={i}  style={{marginRight: (v.id==4?0:20)}} onMouseOver={()=>{this.setState(
                            (ps)=>({index:i})
                        )}}>
                            <div className="car_one">
                                <img className="move" src={v.img1} alt=""/>
                                <img className="look" src={v.img2} alt=""/>
                            </div>
                            <div className="car_two">
                                <div className="move"></div>
                            </div>
                            <div className="car_three">
                                <div className="move">{v.name}</div>
                                <div className="look">{v.content}</div>
                            </div>
                            <div className="car_four">
                                查看详情
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )

    }
}
module.exports={
    Rsx_carnel:Rsx_carnel
};
// var Carnel=[
//     {
//         id:1,
//         name:'拓客宝典',
//         content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
//         img1:'/public/img/ideals1.png',
//         img2:'/public/img/ideals11.png',
//     },
//     {
//         id:2,
//         name:'减肥效果',
//         content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
//         img1:'/public/img/ideals2.png',
//         img2:'/public/img/ideals22.png',
//     },
//     {
//         id:3,
//         name:'减肥助手',
//         content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
//         img1:'/public/img/ideals3.png',
//         img2:'/public/img/ideals33.png',
//     },
//     {
//         id:4,
//         name:'中国好身材',
//         content:'杨柳小蛮腰道不尽的纤柔玲珑曲线美',
//         img1:'/public/img/ideals4.png',
//         img2:'/public/img/ideals44.png',
//     }
// ]
//
// var PEN=[
//     {
//         id:2,
//         name:'Carnel ldeals',
//         tiller:'康尼尔方案',
//         content:'Bring economic returns and good social image '
//     }
// ]
//
// ReactDOM.render( <Rsx_carnel Carnel={Carnel}/>,document.getElementById('rsx_ideals'));
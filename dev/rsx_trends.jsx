const React=require('react');
const ReactDOM=require('react-dom');
const common=require('./common.jsx');

class Rsx_trends extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    render(){
        return (
            <div className="rsxts">
                <common.pn PEN={PEN}/>
                <ul className="rsx_end">
                    {this.props.trend.map((v,i)=>
                        <li className="end_box" key={i} id={this.state.index==i?'end_box':''}    onMouseOver={()=>{this.setState(
                            (ps)=>({index:i})
                        )}}>
                            <div className="end_zhuan">
                                <div className="quan">
                                    <img  className="move" src="/public/img/trend_bai.png" alt=""/>
                                    <img  className="look" src="/public/img/trend_hei.png" alt=""/>
                                </div>
                                <div className="tu">
                                    <img className="move" src={v.img1} alt=""/>
                                    <img className="look" src={v.img2} alt=""/>
                                </div>
                            </div>
                            <div className="end_img">
                                <img src="/public/img/gg_03.png" alt=""/>
                            </div>
                            <div className="end_name">
                                {v.name}
                            </div>
                            <div className="end_eng">
                                {v.eng}
                            </div>
                            <br/>
                            <div className="end_content">
                                {v.content}
                            </div>

                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
module.exports={
    Rt:Rsx_trends
};
// var trend=[
//     {id:1,name:'入住美国',eng:'Settled in the United States',content:'恭贺康伲尔荣获加州中医针灸师联合工会颁发世界杰出减肥瘦身奖',
//         img1:'/public/img/trends1.png',
//         img2:'/public/img/trend11.png'
//     },
//     {id:2,name:'惊艳时光',eng:'Settled in the United States',content:'惊艳时光，感恩同行，因为有梦所以更远康伲尔2015广州全国会实录',
//         img1:'/public/img/trends2.png',
//         img2:'/public/img/trend22.png'
//     },
//     {id:3,name:'入住美国',eng:'Settled in the United States',content:'恭贺康伲尔荣获加州中医针灸师联合工会颁发世界杰出减肥瘦身奖',
//         img1:'/public/img/trends3.png',
//         img2:'/public/img/trend33.png'
//     },
//     {id:4,name:'惊艳时光',eng:'Settled in the United States',content:'惊艳时光，感恩同行，因为有梦所以更远康伲尔2015广州全国会实录',
//         img1:'/public/img/trends1.png',
//         img2:'/public/img/trend11.png'}
// ]

var PEN=[
    {
        id:2,
        name:'New and Trends',
        title:'康尼尔大事件',
        content:'To provide customers with excellent products and personalized service'
    }
]
//
//
// ReactDOM.render(<Rsx_trends trend={trend}/>,document.getElementById('rsx_trends'));
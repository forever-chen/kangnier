const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
class H extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }
    render() {
        return (
            <div>
                <common.Tn/>
                    <common.second data={this.props.b}/>

                <div className="zk_index">
                    <div className="zk_jiameng">
                        <div className="zk_crumbs">
                            <a className="zk_s1" href="/">首页</a>
                            <div className="zk_s">
                                <img src="/public/img/zk_aa1.png" alt=""/>
                            </div>
                            <a className="zk_s2" href="#">招商加盟</a>
                        </div>

                        {this.props.data.map((v, i) => <div className="zk_j zk_j1" key={i}
                                                            onClick={() => this.setState({index: i})}>
                            <img src="/public/img/zk_j2.png" alt=""/>
                            <img src="/public/img/zk_j1.png"
                                 style={{display: (i == this.state.index) ? 'block' : 'none'}} alt=""/>
                            <span className="zk_ja1"
                                  style={{color: (i == this.state.index) ? '#fff' : '#A1A1A1'}}>{v.title}</span>
                        </div>)}
                        <div className="zk_j3"></div>

                        <ul className="zk_u1">

                            <li className="zk_li1" style={{display: (this.state.index == 0) ? 'block' : 'none'}}>
                                <div className="zk_z1">
                                    <img src="/public/img/zk_z2.png" alt=""/>
                                </div>
                                <div className="zk_table">
                                    <img src="/public/img/zk_table.jpg" alt=""/>
                                </div>
                            </li>
                            <li className="zk_li2" style={{display: (this.state.index == 1) ? 'block' : 'none'}}>
                                <div className="zk_z1">
                                    <img src="/public/img/zk_z1.png" alt=""/>
                                </div>
                                <div className="zk_content">
                                    <img src="/public/img/zk_content.jpg" alt=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <common.Bt/>
            </div>
        )
    }
}

const data = [
    {title: "加盟方案"},
    {title: "加盟流程"}
];
const arr=['/public/img/banner3.png'];//二级页面banner图片


ReactDOM.render(<H data={data} b={arr}/>, document.getElementById('page'));

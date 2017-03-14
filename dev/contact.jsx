const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
const arr = ['/public/img/banner3.png'];//二级页面banner图片
var data1 = [{add: '北京市朝阳区SOHO现代城5号1802室', email: 'Carnel@126.com', tel: '010-65664088/65664068 400-666-3288'}];

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        var values = {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            message: this.message.value
        }
        if (values.message) {
            fetch('/add_message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(values)
            }).then((res) => res.json()).then((data) => {
                if (data === 'ok') {
                    alert('留言成功');
                }
            })
        }
    }
    render() {
        const address = this.props.data1.map((v, i) => {
            return (
                <div className="address" key={i}>
                    <ul>
                        <li className="lists">
                            <div className="logo-add"></div>
                            <p className="tit">地址</p>
                            <div className="line"></div>
                            <p className="details">{v.add}</p>
                            <p className="titles">ADD</p>
                        </li>
                        <li className="lists">
                            <div className="logo-email"></div>
                            <p className="tit">邮箱</p>
                            <div className="line"></div>
                            <p className="details email">Email：{v.email}</p>
                            <p className="titles">EML</p>
                        </li>
                        <li className="lists">
                            <div className="logo-tel"></div>
                            <p className="tit">电话</p>
                            <div className="line"></div>
                            <p className="details">{v.tel}</p>
                            <p className="titles">TEL</p>
                        </li>
                    </ul>
                </div>
            )
        });
        return (
            <div className="content">
                <div className="logo-small"></div>
                <div className="title">
                    <p>欢迎各位瘦身同盟的寻找和加入</p>
                    <p>我们将竭诚为每一位想改变的小伙伴提供最优的服务</p>
                    <p>随时恭候您的来访</p>
                </div>
                <div className="hr"></div>
                <div className="title">
                    <p className="lighter">WELCOME TO FIND AND JOIN THE WEIGHT-LOSS ALLIANCE</p>
                    <p className="lighter">WE WILL PROVIDE THE BEST SERVICE FOR EVERY SMALL PARTNER WHO WANTS</p>
                    <p className="lighter">TO CHANGE,WE WELCOME YOU TO VISIT</p>
                </div>
                <div className="hr"></div>
                {address}

                <div className="contact-map">
                    <ul className="map">
                        <div id="map"></div>
                    </ul>
                    <ul className="city">
                        <li className="city-list">
                            <div className="city-hover"></div>
                        </li>
                        <li className="city-list">
                            <div className="city-hover"></div>
                        </li>
                        <li className="city-list">
                            <div className="city-hover"></div>
                        </li>
                    </ul>
                </div>
                <div className="form-contact">
                    <div className="form-left">
                        <div className="form-logo">
                            <p className="f-more">获取更多资讯<br/>请留下您的联系方式</p>
                            <p className="f-en-more">NEED TO KNOW <br/>MORE？</p>
                        </div>
                    </div>
                    <div className="form-right">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="NAME"
                                       ref={(e) => this.name = e}/>
                                <input type="number" className="form-control" placeholder="PHONE"
                                       ref={(e) => this.phone = e}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="EMAIL"
                                       ref={(e) => this.email = e}/>
                            </div>
                            <div className="form-group">
                                <textarea name="" id="message" placeholder="MESSAGE" cols="30" rows="10"
                                          ref={(e) => this.message = e}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn submit" onClick={this.submit}>提交</button>
                                <button type="submit" className="btn reset">重置</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class C extends React.Component {
    render() {
        return (
            <div>
                <common.Tn/>
                <common.second data={arr}/>
                <Contact data1={data1}/>
                <common.Bt/>
            </div>
        )
    }
}
ReactDOM.render(<C/>, document.getElementById('contact'));
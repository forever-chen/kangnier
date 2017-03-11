const React=require('react');
const ReactDOM=require('react-dom');
const admin=require('./admin.jsx');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Row, Col } from 'antd';
import { Upload, message } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
//右边内容
class Admin extends React.Component{
    render(){
        return(
            <div className="example-input">
                <div><span className="cyh_title">姓名:</span><Input placeholder="name" className="cyh_name"/></div>
                <div><span className="cyh_title">电话:</span><Input placeholder="iphone" className="cyh_account" /></div>
                <div> <span className="cyh_title">账户:</span><Input placeholder="accout size" className="cyh_pass" /></div>
               <div><span className="cyh_title">密码:</span><Input placeholder="pass size" className="cyh_phone" /></div>
                <div className="cyh_sub"><Button type="primary">保存</Button></div>
            </div>
        )
    }
}
//左边图片上传
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Avatar extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(info){
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                className="avatar-uploader"
                name="avatar"
                showUploadList={false}
                action="/admin/upload"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {
                    imageUrl ?
                        <img src={imageUrl} alt="" className="avatar" /> :
                        <Icon type="plus" className="avatar-uploader-trigger" />
                }
            </Upload>
        );
    }
}
//左右结构布局
class Right extends React.Component{
    render(){
        return(
            <div style={{padding:'100px'}}>
                <Row>
                    <Col span={18} push={6}>
                        <Admin/>
                    </Col>
                    <Col span={6} pull={18}>
                        <Avatar/>
                    </Col>
                </Row>
            </div>
        )
    }
}
//整个大框架
class Admincontrol extends React.Component{
    render(){
        return(
            <admin.admin>
                <Right/>
            </admin.admin>
        )
    }
}
ReactDOM.render(<Admincontrol/>,document.getElementById('admin'));
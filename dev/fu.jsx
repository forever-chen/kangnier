const React=require('react');
const ReactDOM=require('react-dom');
const admin=require('./admin.jsx');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Row, Col ,Button} from 'antd';
//////////////可以接受参数有：图片上传访问地址url,组件所属id，初始化内容content
var Editor = React.createClass({
    // 编辑器样式
    style: {
        width: '80%',
        height: '500px'
    },
    render: function() {
        return (
            <div>
                {/*<h1 style={{textAlign:"center"}} ref={(e)=>this.ctitle=e}>this is title</h1>*/}
                <div id={this.props.id} style={this.style} contentEditable="true"></div>
                <Button type="primary" style={{float:'right',margin:"30px 100px"}} onClick={this.getContent}>提交内容</Button>
            </div>
        );
    },
    componentDidMount: function () {
        var id = this.props.id;
        this.editor = new window.wangEditor(id);
        this.editor.config.uploadImgUrl = this.props.url;
        // this.editor.config.hideLinkImg = true;
        this.editor.create();
        // 初始化内容
        var down_id=location.pathname.split('/')[location.pathname.split('/').length-1];
        fetch('/admin/rich_download',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body:JSON.stringify({id:down_id})
        }).then((res)=>res.json()).then((data)=>{
            this.editor.$txt.html(data[0].p_con);

        })
        this.editor.config.menus = $.map(wangEditor.config.menus, function(item, key) {
            if (item === 'location') {
                return null;
            }
            return item;
        });
    },
    // 获取内容
    getContent: function () {
        var content = this.editor.$txt.html();
        var down_id=location.pathname.split('/')[location.pathname.split('/').length-1];
        fetch('/admin/rich_upload',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body:JSON.stringify({id:down_id,con:content})
        }).then((res)=>res.json()).then((data)=>{
            if(data=='ok'){
                alert(上传成功);
            }
        })
    }
});
class Rich extends React.Component{
    render(){
        return(
            <div>
                <admin.admin>
                    <Editor id="editor1" url="/admin/rich_update"/>
                </admin.admin>
            </div>
        )
    }
}
ReactDOM.render(<Rich/>,document.querySelector('#cyh_rich'));
module.exports={
    text:Editor
};
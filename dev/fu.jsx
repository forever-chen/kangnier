const React=require('react');
const ReactDOM=require('react-dom');
const admin=require('./admin.jsx');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Row, Col } from 'antd';
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
                <div id={this.props.id} style={this.style} contentEditable="true"></div>
                <button onClick={this.getContent}>get content</button>
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
        this.editor.$txt.html(this.props.content);
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
        console.log(content);
    }
});
class Rich extends React.Component{
    render(){
        return(
            <div>
                <admin.admin>
                    <Editor id="editor1" content="<p>在react中使用wangEditor</p>" url="/admin/rich_upload"/>
                </admin.admin>
            </div>
        )
    }
}
ReactDOM.render(<Rich/>,document.querySelector('#cyh_rich'));
module.exports={
    text:Editor
};
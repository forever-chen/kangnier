const React=require('react');
const ReactDOM=require('react-dom');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
//整个大框架
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cate:null,
            index:null
        }
    }
    render(){
        return(
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <div className="cyh_company">
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" /><a href="">管理者信息</a></span>} onClick={()=>this.setState({cate:0})}>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="bars" /><a href="">一级导航列表</a></span>}  onClick={()=>this.setState({cate:1})}>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="bars" />新闻管理</span>}  onClick={()=>this.setState({cate:2})}>
                                <Menu.Item key="1"><a href=""><a href="">减肥效果</a></a></Menu.Item>
                                <Menu.Item key="2"><a href=""><a href="">中国好身材</a></a></Menu.Item>
                                <Menu.Item key="3"><a href=""><a href="">最新活动</a></a></Menu.Item>
                                <Menu.Item key="4"><a href=""><a href="">减肥助手</a></a></Menu.Item>
                                <Menu.Item key="5"><a href=""><a href="">拓客宝典</a></a></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification" />单页内容管理</span>}   onClick={()=>this.setState({cate:3})}>
                                <Menu.Item key="11"><a href="">董事长介绍</a></Menu.Item>
                                <Menu.Item key="12"><a href="">品牌荣誉</a></Menu.Item>
                                <Menu.Item key="13"><a href="">团队风采</a></Menu.Item>
                                <Menu.Item key="14"><a href="">企业文化</a></Menu.Item>
                                <Menu.Item key="15"><a href="">加盟流程</a></Menu.Item>
                                <Menu.Item key="16"><a href="">加盟方案</a></Menu.Item>

                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="message" /><a href="">留言表管理</a></span>} onClick={()=>this.setState({cate:4})}>
                            </SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="solution" /><a href="">公司信息管理</a></span>} onClick={()=>this.setState({cate:5})}>
                            </SubMenu>
                            <SubMenu key="sub7" title={<span><Icon type="video-camera" /><a href="">视频管理中心</a></span>} onClick={()=>this.setState({cate:6})}>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
module.exports={
    admin:Login
};
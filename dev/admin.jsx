const React = require('react');
const ReactDOM = require('react-dom');
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
//整个大框架
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            news:[],
            page:[]
        }
    }
    componentDidMount() {
        fetch('/admin/page',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'same-origin',
            }).then((res) => res.json()).then((data) => {
                this.setState({
                    page: data,
                })
            }
        );
        fetch('/admin/newslist',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'same-origin',
            }).then((res) => res.json()).then((data) => {
                this.setState({
                    news: data,
                })
            }
        )
    }
    render() {
        let news=this.state.news.map((v,i)=><Menu.Item key={i}><a href={'/admin/news/'+v["sli_id"]}>{v.sliname}</a></Menu.Item>);
        let page=this.state.page.map((v,i)=><Menu.Item key={i}><a href={'/admin/page/'+v["p_id"]}>{v["p_name"]}</a></Menu.Item>);
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <div className="cyh_company">
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/><a href="/admin">管理员</a></span>}>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="bars"/><a href="/admin/navlist">一级导航列表</a></span>}>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="bars"/>新闻管理</span>}>
                                {news}
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification"/>单页内容管理</span>}>
                                {page}
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="message"/><a href="/admin/message">留言表管理</a></span>}>
                        </SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="solution"/><a href="/admin/company">公司信息管理</a></span>}>
                            </SubMenu>
                            <SubMenu key="sub7" title={<span><Icon type="video-camera"/><a href="">视频管理中心</a></span>}>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '12px 0'}}>
                            {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        </Breadcrumb>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
module.exports = {
    admin: Login
};
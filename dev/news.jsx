const React=require('react');
const ReactDOM=require('react-dom');
const admin=require('./admin.jsx');

// import { Table, Icon, Switch, Radio,Button,Popconfirm,Input,  Form} from 'antd';
import {  Input, Icon,  Popconfirm } from 'antd';
import { Table,  Switch, Radio,Button, Form } from 'antd';
const FormItem = Form.Item;



// const columns = [{
//     title: '序号',
//     dataIndex: 'id',
//     key: 'id',
//     width: 40,
//     render: text => <a href="#">{text}</a>,
// }, {
//     title: '推荐',
//     dataIndex: 'state',
//     key: 'state',
//     width: 100,
// }, {
//     title: '标题',
//     dataIndex: 'title',
//     key: 'title',
//     width: 200,
// }, {
//     title: '内容',
//     dataIndex: 'content',
//     key: 'content',
//     width: 360,
// },{ title: '操作', dataIndex: '', key: 'x',width: 160,
//     render: () => (
//         <span>
//             <Button type="primary" onClick={}>编辑</Button>
//             <span className="ant-divider" />
//             <Button type="danger">删除</Button>
//         </span>
//     )
// }];

// const data = [
//     ,
//     count:2,
// ];
// for (let i = 1; i <= 7; i++) {
//     data.push({
//         key: i,
//         id: `${i}`,
//         state: `这是第${i}推荐`,
//         title: `这是第 ${i} 个标题`,
//         content: `这是第 ${i}个内容，，，，，，，，，，，`,
//     });
//
// }

// const expandedRowRender = record => <p>{record.description}</p>;
// const title = () => 'Here is title';
// const showHeader = true;
// const footer = () => 'Here is footer';
// const scroll = { y: 240 };

class Demo extends React.Component {
    constructor(props){
        super(props);
        this.columns = [{
            title: '序号',
            dataIndex: 'info_id',
            key: 'info_id',
            width: 40,
            render: text => <a href="#">{text}</a>,
        }, {
            title: '是否推荐',
            dataIndex: 'state',
            key: 'state',
            width: 100,
            render: (text, record, index) =>{
                return(
                    <Switch checkedChildren={'推荐'} unCheckedChildren={'不推荐'} defaultChecked={this.state.dataSource[index].state==0?false:true}/>
                )
            }
        }, {
            title: '中文标题',
            dataIndex: 'ctitle',
            key: 'ctitle',
            width: 200,
        }, {
            title: '中文内容',
            dataIndex: 'ccon',
            key: 'ccon',
            width: 360,
        },{ title: '操作', dataIndex: '', key: 'x',width: 160,
            render: (text, record, index) => {
                return(

                    // this.state.dataSource.length > 1 ?
                    //   (
                      <span>
                        <Button type="primary" ><a href="#">编辑</a></Button>
                        <span className="ant-divider" />
                        <Popconfirm title="真的要删除?" onConfirm={() => this.onDelete(index)}>
                          <Button type="danger" >删除</Button>
                        </Popconfirm>
                      </span>
                      // ) : null
                )
            }
        }];
        this.state = {
            dataSource:[],
        };
        this.handleAdd=this.handleAdd.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }

// 两种传递方式
//     1. var nid=location.pathname.split('/')[location.pathname.split('/').length-1];                     body: JSON.stringify({id:nid}
//       第一种对应的接受方式
//             [req.body.id]
//     2. var href=location.href.split('/');
//       var id=href[href.length-1];
//     fetch(`/admin/add_news/${id}`, {
//     method: 'POST',
//     headers: {
//     'Content-Type': 'application/json'
//     },
//     credentials: 'same-origin',
//     })
//     第二种对应的接受方式
//         post('/add_news/:id'
//         [req.params.id]
    ////////////////////////////////////    获取
    componentDidMount(){
        var nid=location.pathname.split('/')[location.pathname.split('/').length-1];
            fetch('/admin/news_detail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify({id:nid})
            }).then((res) => res.json()).then((data) => {
                this.setState({
                    dataSource: data
                })
            })
    }
    ////////////////////////////////    删除一条
    onDelete(index){
        // var href=location.href.split('/');
        // var id=href[href.length-1];
        const dataSource = [...this.state.dataSource];
        var dele=dataSource[index].info_id;

        dataSource.splice(index, 1);
        this.setState({ dataSource });
        fetch('/admin/del_news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({id:dele})
        }).then((res) => res.json());
    }
    ///////////////////////////////////     增加一条
    handleAdd (){
        var href=location.href.split('/');
        var id=href[href.length-1];
        fetch(`/admin/add_news/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
        }).then((res) => res.json()).then((data) => {
            const dataSource=this.state.dataSource;
            var newData = {
                info_id: data,
                state: '0',
                ctitle: `这是第${data} 个标题`,
                ccon: `这是第 ${data}个内容，，，，，，，，，，，`,
            };
            this.setState({
                dataSource: [...dataSource, newData]
            });
        })
    }

    render() {
        const columns=this.columns;
        const dataSource=this.state.dataSource;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table  dataSource={dataSource} columns={columns} bordered size />
            </div>
        );
    }
}


//整个大框架
class Admincontrol extends React.Component{
    render(){
        return(
            <admin.admin>
                {/*<div ></div>*/}
                <Demo />
            </admin.admin>
        )
    }
}
ReactDOM.render(<Admincontrol/>,document.getElementById('login'));
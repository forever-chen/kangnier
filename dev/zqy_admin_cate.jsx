const React=require('react');
const ReactDOM=require('react-dom');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Table, Input, Button, Popconfirm } from 'antd';
const admin=require('./admin.jsx');

class Join extends React.Component{
    render(){
        return(
            <EditableTable />
        )
    }
}

class EditableCell extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value: this.props.value,
            editable: false
        }
        this.check=this.check.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.edit=this.edit.bind(this)
    }

    handleChange (e) {
        const value = e.target.value;
        this.setState({ value });
    }
    check(){
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit (){
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '类型(1:小标题,2:大标题)',
            dataIndex: 'pid',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'Pid')}
                />
            ),
        }, {
            title: '标题名称',
            dataIndex: 'catename',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'CateName')}
                />
            ),
        },{
            title: '路径',
            dataIndex: 'url',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'url')}
                />
            ),
        }, {
            title: '删除',
            dataIndex: '删除',
            render: (text, record, index) => {
                return (<a onClick={this.onDelete} href={`/admin/nav/del/${record.id}`} type="danger">删除</a>);
            },
        }];
        this.state = {
            dataSource: [
            //     {
            //     Pid: '0',
            //     CateName: 'kangnier',
            //     url: '/views/index/index.html'
            // },{
            //     Pid: '1',
            //     CateName: 'kangnier',
            //     url: '/views/admin/login.html'
            // }
            ]
        };

        this.handleAdd=this.handleAdd.bind(this);
        this.onCellChange=this.onCellChange.bind(this)
    };
    componentDidMount() {
        fetch('/admin/nav/all',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'same-origin',
            }).then((res) => res.json()).then((data) => {
                this.setState({
                    dataSource:data
                });
            }
        )
    };
    onCellChange(index, key){
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource });
            let id=this.state.dataSource[index].id;
            fetch('/admin/nav/update',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin',
                body:JSON.stringify({index:id,key:key,value:value})
            })
        };

    }
    handleAdd(){
        const { dataSource } = this.state;
        const newData = {
            Pid:'',
            CateName:'',
            url:''};
        this.setState({
            dataSource: [...dataSource, newData]
        });
        fetch('/admin/nav/push',{
            method:"POST",
            header:{
                "Content-Type":"application/json"
            },
            credentials: 'same-origin',
        }).then((res) => res.json()).then((data) => {
        })
    }
    render() {
        const columns = this.columns;
        return (
            <div>
                <Button style={{marginBottom:20}} className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table bordered dataSource={this.state.dataSource} columns={columns} />
            </div>
        );
    }
}
class A extends React.Component{
    render(){
        return(
            <admin.admin>
                <Join/>
            </admin.admin>
        )
    }
}
ReactDOM.render(<A/>,document.getElementById('details'));
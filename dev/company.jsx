const React = require('react');
const ReactDOM = require('react-dom')
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const admin = require('./admin.jsx');
import {Table, Input, Button, Popconfirm, Switch} from 'antd';

//表格
class EditableCell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            editable: false
        }
        this.check = this.check.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.edit = this.edit.bind(this)
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
    }
    check() {
        this.setState({editable: false});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
            console.log(this.state.value)
        }
    }

    edit() {
        this.setState({editable: true});
        console.log(this.state.value)
    }

    render() {
        const {value, editable} = this.state;
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
            title: 'con_id(序号)',
            dataIndex: 'con_id',
            width: '10%',
        }, {
            title: 'name(名称)',
            dataIndex: 'name',
            width: '16%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'name')}
                />
            ),
        }, {
            title: 'city(城市)',
            dataIndex: 'city',
            width: '8%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'city')}
                />
            ),
        }, {
            title: 'section(区)',
            dataIndex: 'section',
            width: '16%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'section')}
                />
            ),
        }, {
            title: 'email(邮箱)',
            dataIndex: 'email',
            width: '16%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'email')}
                />
            ),
        }, {
            title: 'phone(电话)',
            dataIndex: 'phone',
            width: '14%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'phone')}
                />
            ),
        }, {
            title: 'state(状态)',
            dataIndex: 'state',
            width: '9%',
            render: (text, record, index) => (
                <Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={this.state.dataSource[index].state==0?false:true} onChange={()=>this.switchcompany(index,this.state.dataSource[index].state)}/>
            ),
        },
            {
                title: 'operation(操作)',
                dataIndex: 'operation',
                render: (text, record, index) => {
                    return (
                        this.state.dataSource.length > 1 ?
                            (
                                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                    <Button type="danger">删除</Button>
                                </Popconfirm>
                            ) : null
                    );
                },
            }];

        this.state = {
            dataSource: [],
            count: 2,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.onCellChange = this.onCellChange.bind(this);
        this.switchcompany=this.switchcompany.bind(this);
    }
    /////////////////////////页面初始化数据获取
    componentDidMount(){
        fetch('/admin/company',{
            method:"POST",
            header:{
                "content-type":"application/json"
            },
            credentials: 'same-origin',
        }).then((res)=>res.json()).then((data)=>{
            data.map((v,i)=>{
                v.key=i;
            })
            this.setState({
                dataSource:data
            })
            this.state.count=this.state.count++;
        })
    }
    ///////////////////////是否推荐到首页的开关
    onCellChange(index, key) {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({dataSource});
            let id=this.state.dataSource[index].con_id;
            fetch('/admin/update_company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify({index:id,key:key,value:value})
            })
        };
    }
    switchcompany(index,value){
        var id=this.state.dataSource[index].con_id;
        fetch('/admin/switchcom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({id:id,value:!value})
        })
    }
    onDelete(index) {
        const dataSource = [...this.state.dataSource];
        var id=dataSource[index].con_id;
        dataSource.splice(index, 1);
        this.setState({dataSource});
        fetch('/admin/del_company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({id:id})
        })
    }
// con_id,name,city,setion,email,phone,state
    handleAdd() {
        const {count, dataSource} = this.state;

        fetch('/admin/add_company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
        }).then((res)=>res.json()).then((data)=>{
            const newData = {con_id: data, name: '', city: '', section: '', email: '', phone: '', state: ''};
            this.setState({
                dataSource: [...dataSource, newData],
                count:count+1
            });
        })
    }

    render() {
        const {dataSource} = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table bordered dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
            <div>
                <admin.admin>
                    <EditableTable/>
                </admin.admin>
                >
            </div>
        )
    }
}
ReactDOM.render(<Login/>, document.getElementById('page'))



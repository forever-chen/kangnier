const React = require('react');
const ReactDOM = require('react-dom');
const admin = require('./admin.jsx');
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Dropdown, message} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
import {Table, Input, Button, Popconfirm, Upload, Card, Modal, Switch} from 'antd';
class Join extends React.Component {
    render() {
        return (
            <EditableTable />
        )
    }
}
////////////////////////////////////////图片上传
const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Upload_pic extends React.Component {
    render() {
        return (
            <Upload {...props}>
                <Button>
                    <Icon type="upload"/> Click to Upload
                </Button>
            </Upload>
        )
    }
}
class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: false
        };
        this.check = this.check.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
    }

    check() {
        this.setState({editable: false});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }

    edit() {
        this.setState({editable: true});
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
        this.changenav=this.changenav.bind(this);
        this.columns = [{
            title: '序号',
            dataIndex: 'nav_id',
            width: '25%',
        }, {
            title: '标题名称',
            dataIndex: 'nav_name',
            width: '25%',
        },{
            title: 'banner图片',
            dataIndex: 'nav_pic',
            width: '25%',
            render: (text, record, index ,nav_pic) => (
                <Upload_pic action={nav_pic}/>
            ),
        },  {
            title: '是否推荐',
            dataIndex: 'state',
            width: '25%',
            render: (text, record, index) => (
                <Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={this.state.dataSource[index].state==0?false:true} onChange={()=>this.changenav(this.state.dataSource[index].nav_id,this.state.dataSource[index].state)}/>
            ),
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ?
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
        this.onCellChange = this.onCellChange.bind(this)
    }
    changenav(id,state){

        fetch('/admin/changenav', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({id:id,state:!state})
        }).then((res) => res.json()).then((data) => {
            if (data === 'ok') {
                alert('留言成功');
            }
        })
    }
    componentDidMount() {
        fetch('/admin/navlist',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'same-origin',
            }).then((res) => res.json()).then((data) => {
                this.setState((ps) => ({
                    dataSource: data
                }))
            }
        );
    }

    onCellChange(index, key) {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({dataSource});
        };
    }

    onDelete(index) {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({dataSource});
    }

    render() {
        const {dataSource} = this.state;
        const columns = this.columns;
        return (
            <div>
                {/*<Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>*/}
                <Table bordered dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}
//整个大框架
class Z extends React.Component {
    render() {
        return (
            <admin.admin>
                <Join/>
            </admin.admin>
        )
    }
}

ReactDOM.render(<Z />, document.getElementById('login'));
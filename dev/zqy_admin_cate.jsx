const React=require('react');
const ReactDOM=require('react-dom');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Table, Input, Button, Popconfirm } from 'antd';

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
            title: 'Pid',
            dataIndex: 'Pid',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'Pid')}
                />
            ),
        }, {
            title: 'CateName',
            dataIndex: 'CateName',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'CateName')}
                />
            ),
        },{
            title: 'url',
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
            dataSource: [{
                Pid: '0',
                CateName: 'kangnier',
                url: '/views/index/index.html'
            }, {
                Pid: '1',
                CateName: 'kangnier',
                url: '/views/admin/login.html'
            }],
            count: 2,
        };
        this.handleAdd=this.handleAdd.bind(this);
        this.onCellChange=this.onCellChange.bind(this)
    }
    onCellChange(index, key){
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource });
        };
    }
    onDelete(index){
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    }
    handleAdd(){
        const { count, dataSource } = this.state;
        const newData = {Pid:'',CateName:'',url:''};
        this.setState({
            dataSource: [...dataSource, newData]
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

module.exports={
    bnav:Join
}
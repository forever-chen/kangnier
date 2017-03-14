const React=require('react');
const ReactDOM=require('react-dom');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const admin=require('./admin.jsx');
import { Table, Input, Button, Popconfirm } from 'antd';

class EditableCell extends React.Component {
  constructor(props){
  	super(props)
  	this.state={
    value: this.props.value,
    editable: false
      }
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
class Message extends React.Component{
	 constructor(props) {
    super(props);
    this.columns = [{
      title: 'mes_id(id)',
      dataIndex: 'mes_id',
      width: '20%',
    },{
      title: 'mes_name(姓名)',
      dataIndex: 'mes_name',
      width: '12%',
    },{
      title: 'mes_phone(电话)',
      dataIndex: 'mes_phone',
      width: '12%',
    },{
      title: 'mes_email(邮件)',
      dataIndex: 'mes_email',
      width: '12%',
    },{
      title: 'mes_info(留言内容)',
      dataIndex: 'mes_info',
      width: '22%',
    },
      {
      title: 'operation(操作)',
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
    this.onDelete=this.onDelete.bind(this);
  }
  onDelete(index){
    const dataSource = [...this.state.dataSource];
    let delmes=dataSource[index].mes_id;
    dataSource.splice(index, 1);
    this.setState({ dataSource });
      fetch('/admin/delmess', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'same-origin',
          body: JSON.stringify({id:delmes})
    }).then((res)=>res.json()).then((data)=>{

    })
  }
  componentDidMount(){
      fetch('/admin/message',{
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
      })
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
class Login extends React.Component{
    render(){
        return(
            <div>
                <admin.admin>
                    <Message/>
                </admin.admin>>
            </div>
        )
    }
}
ReactDOM.render(<Login/>,document.getElementById('page'))
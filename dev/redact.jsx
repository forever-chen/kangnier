const React=require('react');
const ReactDOM=require('react-dom');
const admin=require('./admin.jsx');
const Details=require('./zqy_news_detail.jsx');


//整个大框架
class Admincontrol extends React.Component{
    render(){
        return(
            <admin.admin>
                <Details.detail/>
            </admin.admin>
        )
    }
}
ReactDOM.render(<Admincontrol/>,document.getElementById('login'));
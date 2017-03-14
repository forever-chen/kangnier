const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const admin=require('./admin.jsx');
import {Card, Icon} from 'antd';
import { Upload,  Modal } from 'antd';
import { Button } from 'antd';

class PicturesWall extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
        this.handleCancel=this.handleCancel.bind(this);
        this.handlePreview=this.handlePreview.bind(this);
    };
    handleCancel  ()  {this.setState({ previewVisible: false })};

    handlePreview  (file)  {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };
    handleChange({ fileList })  {this.setState({ fileList })}


    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="/upload.do"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
};
class News extends React.Component {
    render() {
        return (
            <div className="box" style={{width: 900, height: 1000, padding: '30'}}>
                <div className="top" style={{width:100,height:100}}>
                    <Button type="primary" style={{width:80,height:80}}><Icon type="plus" style={{fontSize:40,cursor:'pointer',color:'#ffffff'}}/></Button>

                </div>
                <Card title="1" style={{width: 300}} extra={<a href="#"><Icon type="close"/></a>}>
                    <div className="custom-image">
                        <PicturesWall />
                    </div>
                    <div className="custom-card">
                        <h3 style={{textAlign: 'center'}}>
                            中国人
                        </h3>
                        <p>
                            描述：
                        </p>
                        <p style={{paddingBottom: 20}}>
                            <textarea name="" id="" cols="39" rows="5" style={{resize: 'none'}}
                                      wrap="PHYSICAL"></textarea>
                        </p>
                        <p>
                            content:
                        </p>
                        <p>
                            <textarea name="" id="" cols="39" rows="5" style={{resize: 'none'}}></textarea>
                        </p>
                    </div>
                </Card>
            </div>
        )
    }
}

//整个大框架
class K extends React.Component{
    render(){
        return(
            <admin.admin>
                <News/>
            </admin.admin>
        )
    }
}
ReactDOM.render(<K />, document.getElementById('news'));
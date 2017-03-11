import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import { Form, Button, Radio } from 'antd';
import {Upload, Icon, Modal} from 'antd';
const FormItem = Form.Item;
import { Pagination } from 'antd';

//module
class Details extends React.Component {

    render() {

        return (
            <div className="detail">
                <PicturesWall />
                <FormLayoutDemo />
                <div>
                    <Input type="textarea" placeholder="Please input chinese content" autosize />
                    <div style={{ margin: '24px 0' }} />
                    <Input type="textarea" placeholder="Please input english content" autosize={{ minRows: 2, maxRows: 10 }} />
                </div>
                <FormItem>
                    <Button type="primary" size="large">提交</Button>
                </FormItem>
            </div>
        )
    }
}
//标题输入框
class FormLayoutDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
        this.handleFormLayoutChange=this.handleFormLayoutChange.bind(this);
    }
    handleFormLayoutChange  (e)  {
        this.setState({ formLayout: e.target.value });
    }
    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;

        return (
            <div>
                <Form layout={formLayout}>
                    <FormItem
                        label="标题:"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder" />
                    </FormItem>
                    <FormItem
                        label="title:"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder" />
                    </FormItem>

                </Form>
            </div>
        );
    }
}
//上传图片
class PicturesWall extends React.Component {
    constructor(props) {
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
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleCancel() {
        this.setState({previewVisible: false})
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange({fileList}) {
        this.setState({fileList})
    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
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
                    { uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

// ReactDOM.render(<Details />, document.getElementById('page'));
module.exports={
    detail:Details
}

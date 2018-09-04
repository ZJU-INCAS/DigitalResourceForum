import * as React from 'react';
import { Form, Input,InputNumber, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="课程名称"
        >
          {getFieldDecorator('name', {
            rules: [ {
              required: true, message: '请输入课程名称！',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem  {...formItemLayout}
          label="课程类型">
            {getFieldDecorator('type', {
            rules: [ {
              required: true, message: '请输入课程名称！',
            }],
          })(
        <Select defaultValue="1">
            <Option value="1">语文</Option>
            <Option value="2">数学</Option>
            <Option value="3">英语</Option>
            <Option value="4">计算机</Option>
            <Option value="5">物理</Option>
          </Select>
              )}
            </FormItem>
        <FormItem
          {...formItemLayout}
          label="建议学员规模"
        >
          {getFieldDecorator('amount', {       
            rules: [{ required: true, message: '请输入学员规模！' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='奖励金'
        >
          {getFieldDecorator('award', {
            rules: [{ required: true, message: '请输入奖励金!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="详细要求"
        >
          {getFieldDecorator('requirement', {       
            rules: [{ required: true, message: '请输入课程的详细要求！' }],
          })(
            <Input.TextArea />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交审核</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Input, Form, Button, Modal } from 'antd';
const FormItem = Form.Item;

class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      hasLogined: false,
      register_modal_visible: false
    }
  }

  register(){
    this.states.register_modal_visible = true;
    this.forceUpdate();
  }

  handleOk(){
    this.states.register_modal_visible = false;
    this.forceUpdate();
  }

  handleCancel(){
    this.states.register_modal_visible = false;
    this.forceUpdate();
  }

  handleSubmit(e){
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    console.log(values);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const user_show = this.states.hasLogined ? <Icon type="logout" /> : <Icon type="login" onClick={this.register.bind(this)}/>
    return(
      <div className="header">
        <img className='log' src='/src/images/news.log.png' alt='log'/>
        <span className='app-title'>
          ReactNew
        </span>
        <span className='login-info'>
          { user_show }
        </span>

        <Modal title='注册' visible={this.states.register_modal_visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
          <Form onSubmit={this.handleSubmit.bind(this)} className='login-form'>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username'}],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password_confirm', {
                rules: [{ required: true, message: '请再次输入密码'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password Confirm" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="register-form-button"> 注册 </Button>
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default MobileHeader = Form.create()(MobileHeader);

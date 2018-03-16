import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Menu, Icon, Tabs, Button, Modal, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PcHeader extends React.Component {
  constructor() {
    super();
    this.states = {
      current: 'top',
      hasLogined: false,
      current_user_name: '蚂蚁哈哈哈',
      register_modal_visible: false,
      register_or_login: '注册'
    }
  }

  handleClick(e){
    this.states.current = e.key;
    if(e.key == 'register'){
      this.states.register_modal_visible = true
    }
    this.forceUpdate();
  }

  handleOk(e){
    this.states.register_modal_visible = false;
    this.forceUpdate();
    // this.setState({
    //   register_modal_visible: false,
    // });
  }

  handleCancel(e){
    this.states.register_modal_visible = false;
    this.forceUpdate();
    // this.setState({
    //   register_modal_visible: false,
    // });
  }

  handleSubmit(e){
    console.log('handleRegistor');
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    console.log(values);
  }

  callback(key){
    console.log(key)
    this.states.register_or_login = key;
    this.forceUpdate();
  }

  handleLogin(e){
    console.log('handleLogin');
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    console.log(values);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const user_show = this.states.hasLogined
    ? <Menu.Item key='register'>
        <Button type="primary">{this.states.current_user_name}</Button>
        &nbsp;
        <Button type='dashed'>个人中心</Button>
        &nbsp;
        <Button type='ghost'>退出</Button>
      </Menu.Item>
    : <Menu.Item key="register">
        <Icon type="appstore" />注册／登陆
      </Menu.Item>

    return(
      <div id="pc-header">
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <img className='log' src='/src/images/news.log.png' alt='log'/>
            <span className='app-title'>
              ReactNew
            </span>
          </Col>
          <Col span={16}>
            <Menu onClick={this.handleClick.bind(this)} mode="horizontal" selectedKeys={[this.states.current]}>
              <Menu.Item key="top">
                <Link to='/'>
                  <Icon type="appstore" />头条
                </Link>
              </Menu.Item>

              <Menu.Item key="national">
                <Icon type="appstore" />国内
              </Menu.Item>

              <Menu.Item key="international">
                <Icon type="appstore" />国际
              </Menu.Item>

              <Menu.Item key="military">
                <Icon type="appstore" /> 军事
              </Menu.Item>

              <Menu.Item key="entertainment">
                <Icon type="appstore" />娱乐
              </Menu.Item>
              {user_show}
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>

        <Modal title={this.states.register_or_login} visible={this.states.register_modal_visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} >
          <Tabs defaultActiveKey="register" onChange={this.callback.bind(this)}>
            <TabPane tab="注册" key="register">
              <Form onSubmit={this.handleSubmit.bind(this)} className="register-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password_confirm', {
                    rules: [{ required: true, message: '请再次输入密码' }],
                  })(
                    <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password Confirm" />
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit" className="register-form-button"> 注册 </Button>
                </FormItem>
              </Form>
            </TabPane>
            <TabPane tab="登录" key="login">
              <Form onSubmit={this.handleLogin.bind(this)} className='login-form'>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ require: true, message: '请输入用户名'}],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="UserName" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ require: true, message: '请输入密码'}],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit" className="register-form-button"> 登录 </Button>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default PcHeader = Form.create()(PcHeader);

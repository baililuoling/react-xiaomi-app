import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import {login} from 'src/api';
import './style.scss';

@Form.create({ name: 'normal_login' })
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values).then(res=>{
          if(res.status===200&&res.data.length){
            sessionStorage.setItem('username',values.username);
            sessionStorage.setItem('id',res.data[0].id);
            sessionStorage.setItem('token',res.data[0].token);
            this.props.history.push('/home');
          }
        })
      }
    });
  };
  toRegister=()=>{
    this.props.history.push('/register')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="小米账号登录" bordered={false} className="loginclass">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
        <span style={{color:'blue'}} onClick={this.toRegister}>没有账号?点我去注册</span>
      </Card>
    );
  }
}

export default Login;
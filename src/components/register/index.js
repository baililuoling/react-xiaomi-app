import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import {register,findUsername} from 'src/api';
import './style.scss';

@Form.create({ name: 'normal_login' })
class Register extends React.Component {
  constructor(props){
    super(props)
    this.state={
      msg:''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        findUsername(values.username).then(res=>{
          if(res.status===200){
            if(res.data.length){
              this.setState({
                msg:'该用户名已被注册'
              },()=>{
                setTimeout(()=>{
                  this.setState({
                    msg:''
                  })
                },2000)
              })
            }else{
              var body={
                username:values.username,
                password:values.password,
                token:Date.now()+Math.random()
              }
              if (!err) {
                register(body).then(res=>{
                  if(res.status===201){
                    this.props.history.push('/login')
                  }
                })
              }
            }
          }
        })
      }
    });
  };
  toLogin=()=>{
    this.props.history.push('/login')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="小米账号注册" bordered={false} className="registerclass">
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
              注册
            </Button>
          </Form.Item>
        </Form>
        <span style={{color:'blue'}} onClick={this.toLogin}>已有账号?点我去登录</span>
        <span style={{color:'red'}}>{this.state.msg}</span>
      </Card>
    );
  }
}

export default Register;
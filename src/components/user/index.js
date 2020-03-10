import React from 'react';
import './style.scss';

class User extends React.Component {
  toLogin=()=>{
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='user'>
        <div className='main'>
          <div className='login_register'>
            {
              sessionStorage.getItem('token')?
              <p>
                <i><img src='https://s1.mi.com/m/images/m/default.png' alt='默认头像' /></i>
                <span>你好:{sessionStorage.getItem('username')}</span>
              </p>
              :<p onClick={this.toLogin}>
                <i><img src='https://m.mi.com/static/img/avatar.76a75b8f17.png' alt='默认头像' /></i>
                <span>登录/注册</span>
              </p>
            }
          </div>
          <div className='my_order'>
            
          </div>
        </div>
      </div>
    )
  }
}

export default User;
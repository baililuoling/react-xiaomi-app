import React from 'react';
import './style.scss';
import Logo from 'src/assets/img/logo.png';
import {Icon,BackTop} from 'antd';
import {NavLink} from 'react-router-dom';
import MySwiper from './myswiper';
import MainNav from './mainnav';
import Products from './products';

class Home extends React.Component {
  toLogin=()=>{
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='home'>
        <header className='header'>
          <div className='top'>
            <img src={Logo} alt='小米' />
            <div className='search'>
              <div className='icon'>
                <Icon type='search' />
              </div>
              <p>搜索商品名称</p>
            </div>
            <div className='user' onClick={this.toLogin}>
              <Icon type='user' />
            </div>
          </div>
          <div className='top_nav'>
            <NavLink to='/home/recommend' activeClassName='on'>推荐</NavLink>
            <NavLink to='/home/phone' activeClassName='on'>手机</NavLink>
            <NavLink to='/home/Intelligence' activeClassName='on'>智能</NavLink>
          </div>
        </header>
        <div className='main'>
          <MySwiper/>
          <MainNav/>
          <Products/>
        </div>
        <BackTop className='backup'>
          <div>
            <Icon type="to-top" />
          </div>
        </BackTop>
      </div>
    )
  }
}

export default Home;
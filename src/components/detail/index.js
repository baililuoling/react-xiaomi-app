import React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import  action from '../cart/action';
import { Button, message } from 'antd';

@connect(state=>state)
class Detail extends React.Component {
  addToCart=()=>{
    if(sessionStorage.getItem('token')){
      action.changeCount(this.props.category,1)
      message.success('添加成功')
    }else{
      message.info('请先登录')
    }
    
    
  }
  render() {
    let {product_name,img_url,price}=this.props.category;
    return (
      <div className='detail'>
        <img src={img_url} alt={product_name} />
        <div className='product_text'>
          <h2>{product_name}</h2>
          <span>{price}</span>
        </div>
        <Button type='primary' className='cart_b' onClick={this.addToCart}>加入购物车</Button>
      </div>
    )
  }
}

export default Detail;
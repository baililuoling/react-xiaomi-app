import React from 'react';
import './style.scss';
import action from './action';
import {findUsername} from 'src/api';
import {Button,Icon} from 'antd';

export default class Cart extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cartList:[],
      visible:true
    }
  }
  componentDidMount(){
    this.setState({
      visible:true
    })
    sessionStorage.getItem('token')?this.renderCartList():this.setState({
      visible:false
    })
  }
  renderCartList=()=>{
    findUsername(sessionStorage.getItem('username')).then(res=>{
      if(res.status===200){
        this.setState({
          cartList:res.data[0].cart
        })
      }
    })
  }
  change(item,p){
    action.changeCount(item,p)
    setTimeout(this.renderCartList,200)
  }
  delete(name){
    action.deleteProduct(name)
    setTimeout(this.renderCartList,200)
  }
  render() {
    let {cartList,visible}=this.state;
    var sum=0;
    cartList.forEach(item=>{
      sum+=item.price*item.count
    })
    return (
      <div className='cart'>
        <div className='main'>
          <div className='cart_list'>
            <ul style={{display:visible?'':'none'}}>
              {
                cartList.map(item=>{
                  return  <li key={item.product_name}>
                            <img src={item.img_url} alt={item.product_name} />
                            <div className='product_text'>
                              <p>{item.product_name}</p>
                              <p>售价:<span>{item.price}</span>元</p>
                              <p>
                                <Button onClick={this.change.bind(this,item,-1)} disabled={item.count<=1?true:false}>-</Button>
                                <span>{item.count}</span>
                                <Button onClick={this.change.bind(this,item,1)}>+</Button>
                              </p>
                            </div>
                            <Icon type='delete' className='delete' onClick={this.delete.bind(this,item.product_name)} />
                          </li>
                })
              }
            </ul>
            <p style={{textAlign:'center',display:visible?'none':''}}>请先登录</p>
          </div>
          <div className='pay_btn' style={{display:visible?'':'none'}}>
            <p>共{sum}元</p>
            <p style={{background:'#ff6700',color:'#fff'}}>去结算</p>
          </div>
        </div>
      </div>
    )
  }
}
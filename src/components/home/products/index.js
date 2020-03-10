import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

@connect(state=>state)
class Products extends React.Component {
  render() {
    return (
      <div className='products'>
        <div className='hot1'>
          <div className='hot1_left'>
            <img src={require('src/assets/img/img00.jpg')} alt='img00.jpg' />
          </div>
          <div className='hot1_right'>
            <img src={require('src/assets/img/img01.jpg')} alt='img01.jpg' />
            <img src={require('src/assets/img/img02.jpg')} alt='img02.jpg' />
          </div>
        </div>
        <div className='hot2'>
          <img src={require('src/assets/img/img03.jpg')} alt='img03.jpg' />
        </div>
        <div className='hot3'>
          <img src={require('src/assets/img/img04.jpg')} alt='img04.jpg' />
        </div>
        <div className='phone'>
          {
            this.props.home.phoneList.map(item=>{
              return (<figure key={item.id}>
                        <img src={item.imgUrl} alt={item.name} />
                        <figcaption>
                          <p>{item.name}</p>
                          <p>{item.text}</p>
                          <p>
                            <span> {item.price} </span>
                            <span>起 </span>
                            {item.oldPrice?<span>{item.oldPrice}</span>:''}
                          </p>
                          <Button type="danger" style={{marginBottom:'.4rem'}}>立即购买</Button>
                        </figcaption>
                      </figure>)
            })
          }
        </div>
      </div>
    )
  }
}

export default Products;
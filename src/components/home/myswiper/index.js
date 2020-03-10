import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default class MySwiper extends React.Component {
  componentDidMount(){
    new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })   
  }
  render() {
    return (
      <div className="swiper-container">
          <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={require('src/assets/img/bar01.jpg')} alt='bar01.jpg' /></div>
              <div className="swiper-slide"><img src={require('src/assets/img/bar02.jpg')} alt='bar02.jpg' /></div>
              <div className="swiper-slide"><img src={require('src/assets/img/bar03.jpg')} alt='bar03.jpg' /></div>
          </div>
          <div className="swiper-pagination"></div>
      </div>
    )
  }
}
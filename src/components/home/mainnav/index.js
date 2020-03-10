import React from 'react';

export default class MainNav extends React.Component {
  mapIcons(){
    let arr=[];
    for(var i=0;i<10;i++){
      arr.push(
        <img src={require('src/assets/img/icons0'+i+'.png')} key={i} alt={'icons0'+i+'.png'} />
      )
    }
    return arr;
  }
  render() {
    return (
      <div className='mainnav'>
        {
          this.mapIcons()
        }
      </div>
    )
  }
}
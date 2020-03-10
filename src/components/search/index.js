import React from 'react';
import './style.scss';
// import {getSearchList} from 'src/api';
import {Icon,Input} from 'antd';


class Search extends React.Component {
  onChange({ target: { value } }){
    // getSearchList(value)
  }
  render() {
    return (
      <div className='search'>
        <header className='header'>
          <Icon type="left" onClick={()=>{window.history.back()}} />
          <Input placeholder="Basic usage" style={{width:'7rem'}} onChange={this.onChange} />
          <Icon type="search" onClick={()=>{this.props.history.push('/search')}} />
        </header>
      </div>
    )
  }
}

export default Search;
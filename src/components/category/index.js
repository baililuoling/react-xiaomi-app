import React from 'react';
import {connect} from 'react-redux';
import actionCreator from './actionCreator';
import './style.scss';
import {getCategoryList} from 'src/api';
import {Anchor} from 'antd';
const {Link} =Anchor;

@connect(state=>state,actionCreator)
class Category extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    getCategoryList().then(res=>{
      if(res.status===200){
        this.setState({
          data:res.data.data
        })
      }
    })
  }
  toDetail(item){
    this.props.getItem(item)
    this.props.history.push('/detail')
  }
  render() {
    let {data}=this.state;
    return (
      <div className='category'>
        <div className='main'>
          <aside className='aside_nav'>
            <Anchor>
                <ul>
                {
                  data.map(item=>{
                    return <li key={'#'+item.category_id}><Link href={'#'+item.category_id} title={item.category_name} /></li>
                  })
                }
                </ul>
            </Anchor>
          </aside>
          <div className='main_list'>
            {
              data.map(item=>{
                return <div id={item.category_id} key={item.category_id}>{item.category_list.map(item=>{
                  var body=item.body;
                  switch(item.view_type){
                    case 'cells_auto_fill':
                      return <img src={body.items[0].img_url} alt={body.items[0].img_url} key={'cells'+Math.random()} style={{width:body.w/75+'rem',height:body.h/75+'rem'}} />
                    case 'category_title':
                      return <h3 key={body.category_name} style={{textAlign:'center'}}>{body.category_name}</h3>
                    case 'category_group':
                      return (<ul key={'group'+Math.random()}>
                                {
                                  body.items.map(item=>{
                                    return <li key={item.product_name+Math.random()} onClick={this.toDetail.bind(this,item)}>
                                            <figure>
                                              <img src={item.img_url} alt={item.product_name} style={{width:'1.389rem',height:'1.389rem'}} />
                                              <figcaption>{item.product_name}</figcaption>
                                            </figure>
                                           </li>
                                  })
                                }
                              </ul>)
                    default:return '';
                  }
                })}</div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Category;
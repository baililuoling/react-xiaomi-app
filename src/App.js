import React from 'react';
import './clearCss.scss';
import './App.scss';
import {Icon} from 'antd';
import {Route,Redirect,Switch,withRouter,NavLink} from 'react-router-dom';
import {routes,subRoutes} from './router';

@withRouter
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      visibleFooter:true,
      visibleHeader:false
    }
  }
  componentDidMount(){
    this.changeVisible(this.props.location.pathname)
    this.routerListen()
  }
  routerListen(){
    this.props.history.listen(location=>{
      this.changeVisible(location.pathname)
    })
  }
  changeVisible(pathname){
    this.setState({
      title:'',
      visibleFooter:true,
      visibleHeader:false
    })
    switch(pathname){
      case '/':
      case '/home':document.title='首页';break;
      case '/category':document.title='分类';this.setState({visibleHeader:true,title:'分类'});break;
      case '/discover':document.title='星球';break;
      case '/cart':document.title='购物车';this.setState({visibleFooter:false,visibleHeader:true,title:'购物车'});break;
      case '/user':document.title='我的';break;
      default:
        document.title='小米商城';
        this.setState({
          visibleFooter:false
        })
    }
  }
  render() {
    let allRoutes=[...routes,...subRoutes];
    return (
      <div className="App">
        <header className='header' style={{display:this.state.visibleHeader?'':'none'}}>
          <Icon type="left" onClick={()=>{window.history.back()}} />
          <span>{this.state.title}</span>
          <Icon type="search" onClick={()=>{this.props.history.push('/search')}} />
        </header>
        <Switch>
          {
            allRoutes.map(item=>{
              return <Route key={item.path} path={item.path} component={item.component} />
            })
          }
          <Redirect from='/' to='/home' exact />
          <Redirect to='/notfound' />
        </Switch>
        <footer style={{display:this.state.visibleFooter?'':'none'}} className='footer'>
          {
            subRoutes.map((item,index)=>{
              return (
                <NavLink to={item.path} exact key={index} activeStyle={{color:'#ff6700'}}>
                  <figure>
                    <Icon type={item.icon} />
                    <figcaption>{item.text}</figcaption>
                  </figure>
                </NavLink>
              )
            })
          }
        </footer>
      </div>
    );
  }
}

export default App;

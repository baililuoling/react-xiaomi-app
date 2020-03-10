import Home from '../components/home';
import Category from '../components/category';
import Discover from '../components/discover';
import Cart from '../components/cart';
import User from '../components/user';
import NotFound from '../components/notfound';
import Login from '../components/login';
import Register from '../components/register';
import Detail from '../components/detail';
import Search from '../components/search';

export const routes = [
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/notfound',
    component:NotFound
  }
]

export const subRoutes = [
  {
    path:'/home',
    component:Home,
    text:'首页',
    icon:'home'
  },
  {
    path:'/category',
    component:Category,
    text:'分类',
    icon:'bars'
  },
  {
    path:'/discover',
    component:Discover,
    text:'星球',
    icon:'global'
  },
  {
    path:'/cart',
    component:Cart,
    text:'购物车',
    icon:'shopping-cart'
  },
  {
    path:'/user',
    component:User,
    text:'我的',
    icon:'user'
  }
]
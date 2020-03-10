import homeRedux from '../components/home/reducer';
import categoryRedux from '../components/category/reducer';
import {combineReducers} from 'redux';

let reducer = combineReducers({
  home:homeRedux,
  category:categoryRedux
})

export default reducer;
import axios from 'axios';

let resolve = 'http://localhost:4000';

export const getCategoryList=()=>{
  return axios.get(resolve+'/category_list');
}

export const register=(body)=>{
  return axios.post(resolve+'/users',body,{Headers:{ 'Content-Type':'application/json' }});
}

export const findUsername=(username)=>{
  return axios.get(resolve+'/users',{params:{username}});
}

export const login=(body)=>{
  return axios.get(resolve+'/users',{params:body});
}

export const patchCart=(id,cart)=>{
  return axios.patch(resolve+'/users/'+id,{cart},{Headers:{ 'Content-Type':'application/json' }})
}

export const getSearchList=(value)=>{
  return axios.post('https://m.mi.com/v1/hisearch/suggestion_v3',{client_id: 180100031051,channel_id:'',webp: 1,query:value})
}
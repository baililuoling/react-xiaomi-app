const initState={
  item:{}
}

export default (state=initState,action)=>{
  switch(action.type){
    case 'GETITEM':
      return {...action.item,price:'2000'};
    default:
      return state;
  }
}
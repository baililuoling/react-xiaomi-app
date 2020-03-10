const initState={
  phoneList:[
    {
      id:0,
      imgUrl:require('src/assets/img/phone00.jpg'),
      name:'小米10 Pro',
      text:'骁龙865 / 50倍变焦',
      price:'4999'
    },
    {
      id:1,
      imgUrl:require('src/assets/img/phone01.jpg'),
      name:'小米10',
      text:'骁龙865/1亿像素相机',
      price:'3999'
    },
    {
      id:2,
      imgUrl:require('src/assets/img/phone02.jpg'),
      name:'Redmi K30',
      text:'120Hz流速屏，全速热爱',
      price:'1599'
    },
    {
      id:3,
      imgUrl:require('src/assets/img/phone03.jpg'),
      name:'Redmi K30 5G',
      text:'双模5G，120Hz流速屏',
      price:'1999'
    },
    {
      id:4,
      imgUrl:require('src/assets/img/phone04.jpg'),
      name:'Redmi Note 8 Pro',
      text:'6400万全场景四摄',
      price:'1299',
      oldPrice:'1399'
    },
    {
      id:5,
      imgUrl:require('src/assets/img/phone05.jpg'),
      name:'Redmi Note 8',
      text:'千元4800万四摄',
      price:'999'
    },
    {
      id:6,
      imgUrl:require('src/assets/img/phone06.jpg'),
      name:'小米CC9 Pro',
      text:'1亿像素 五摄四闪',
      price:'2599',
      oldPrice:'2799'
    },
    {
      id:7,
      imgUrl:require('src/assets/img/phone07.jpg'),
      name:'小米CC9',
      text:'3200万自拍，4800万三摄',
      price:'1499',
      oldPrice:'1799'
    }
  ]
}

export default (state=initState,action)=>{
  return state;
}


import {patchCart,findUsername} from 'src/api';

export default {
  changeCount(data,p){
    let {product_name,img_url,price}=data;
    findUsername(sessionStorage.getItem('username')).then(res=>{
      if(res.status===200&res.data.length){
        if(!res.data[0].cart){
          res.data[0].cart=[];
        }
        var idx = res.data[0].cart.findIndex(item=>item.product_name===product_name)
        if(idx===-1){
          res.data[0].cart.push({
            product_name,
            img_url,
            price,
            count:1
          })
        }else{
          res.data[0].cart[idx].count+=p;
        }
        patchCart(sessionStorage.getItem('id'),res.data[0].cart)
      }
    })
  },
  deleteProduct(name){
    findUsername(sessionStorage.getItem('username')).then(res=>{
      if(res.status===200){
        var idx = res.data[0].cart.findIndex(item=>item.product_name===name)
        res.data[0].cart.splice(idx,1)
        patchCart(sessionStorage.getItem('id'),res.data[0].cart)
      }
    })
  }
}
import React, { useContext } from 'react'
import './Product.css' 
import MyContext from '../../context'

const addImg = require('../../images/addCart.jpeg')
const removeImg = require('../../images/removeCart.jpeg')
//setSomething([...something, {src,title,price,id,amount,anyhtingElse}])
const Product = ({src, title, price, id}) => {

  const dataContext = useContext(MyContext)


  const addToCart = ()=> {
    console.log(dataContext.cart)
    const cartObj = {id:id, image:src, title:title, price:price, amount:1}
    let check = dataContext.cart.find((e) => e.id === cartObj.id) 
     if(!check){
      dataContext.setCart([...dataContext.cart,cartObj])
     }else{
      const itemInCart = dataContext.cart.indexOf(check)
      const clone = [...dataContext.cart]
      clone[itemInCart].amount++
      dataContext.setCart(clone)
     }
     
  }

  const removeFromCart = ()=> {
    let check = dataContext.cart.find((e)=> e.id === id)
    if(check.amount === 0 || !check){
      return;
    }
    let position = dataContext.cart.findIndex((e)=> e.id === id)
    console.log(check.amount);
    if(check.amount > 1){
      check.amount--
    }else{
      const clone = [...dataContext.cart]
      console.log(clone);
      clone.splice(position,1)
      dataContext.setCart(clone)
    }
    
  }

  return (
    <div className="product-card">
        <div className="product-image">
            <img src={src}
            alt={"this is photo"} 
            />
        </div>
        <div className="product-info" >
            <button onClick={ ()=> addToCart()} >
            <img style={{ height:30, backgroundColor:"rgb(154, 174, 217)", borderRadius:50}} src={addImg}></img>
            </button>
            {/* <h5>{clone.amount}</h5> */}
            <button onClick={()=> removeFromCart()}> 
            <img style={{ height:30, backgroundColor:"rgb(255, 103, 134)", borderRadius:50}} src={removeImg}></img>
            </button>
            <h5>{title}</h5>
            <h6>{price}</h6>
            
        </div>
    </div> 
  )
}

export default Product
import React, {useContext, useState} from 'react'
import MyContext from '../../context'
import Product from '../Product/Product'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './Cart.css'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const addImg = require('../../images/addCart.jpeg')
  const removeImg = require('../../images/removeCart.jpeg')
  const dataContext = useContext(MyContext)


  return (

      <div>
            <Button onClick={() => setCartOpen(true)}><img style={{heigth:60, width:60, marginRight:20}} src={addImg}></img></Button>
            <Drawer
              className={'drawer'}
              anchor={'right'}
              open={cartOpen}
              onClose={()=> setCartOpen(false)}
            >
              <Button
               onClick={()=> setCartOpen(false)}>{<img style={{heigth:60, width:60, marginRight:20}} src={removeImg}></img>}
               </Button>
             
          {dataContext.cart.map((item,index)=> {
            return(
              <Product
                id={item.id}
                src={item.image}
                title={item.title}
                price={item.price}
                key={index}
                amount={item.amount}
              />

            )
          })}
            </Drawer>
      </div>
    );
    }

export default Cart
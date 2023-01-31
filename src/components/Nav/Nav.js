import React, { useContext } from 'react'
import './Nav.css'
import Filter from '../Filter/Filter'
import Sort from '../Sort/Sort'
import Cart from '../Cart/Cart'
// import MyContext from '../../context'

const Nav = ({funcFilter, categories}) => {
 
// const dataContext = useContext(MyContext)

  return (
    <nav className="product-filter">
        <h1>Jackets</h1>
        <div className="sort">
          <Cart></Cart>
            <Filter/>
            <Sort/>
        </div>
    </nav>
  )
}

export default Nav
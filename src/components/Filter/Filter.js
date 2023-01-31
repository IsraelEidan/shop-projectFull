import React, { useContext } from 'react'
import './Filter.css'
import MyContext from '../../context'

const Filter = () => {

  const dataContext = useContext(MyContext)

  return (
    <div className="collection-sort" style={{marginRight:10}}>

        <label>Filter by:</label>
            <select onChange={(e) => dataContext.funcFilter(e.target.value)}>
                {dataContext.categories.map((item,index) =>
                <option
                 categories={dataContext.categories}
                 key={index}
                 value={item}
                 
                >{item}</option> )}
                
            </select>
    </div>
  )
}


export default Filter
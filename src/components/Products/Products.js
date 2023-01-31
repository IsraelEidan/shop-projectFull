import React, { useContext } from "react";
import "./Products.css";
import Product from "../Product/Product";
import SpinnerArr from "../../data"
import MyContext from "../../context";

const Products = () => {

  const dataContext = useContext(MyContext)

  if(dataContext.isLoading){
    return <SpinnerArr />
  }
  const funcChoosenCategory = dataContext.choosenCategory.length > 0 ? dataContext.choosenCategory : dataContext.prodFetch 
  return (
    <section className="products">
      {funcChoosenCategory.map((item, index) => 
        
        <Product
        id={index}
        src={item.image}
        title={item.title}
        price={item.price}
        key={index}
        />)
      }
    </section>
      
)}
export default Products;

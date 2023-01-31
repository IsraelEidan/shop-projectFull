import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { useState, useEffect, useContext } from 'react';
import MyContext from './context';

function App(props) {
  const [choosenCategory, setChoosenCategory] = useState([])
  const [prodFetch, setProdFetch]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [cart, setCart] = useState([])
  

  const dataContext = useContext(MyContext)

  const categories = prodFetch.map(p => p.category).filter((value, index, prodFetch) => prodFetch.indexOf(value)===index);
  categories.unshift("All Products")

  const funcFilter=(filteredCategory) => {
      if(filteredCategory === "All Products"){
      setChoosenCategory(prodFetch)
      }else{
        setChoosenCategory(prodFetch.filter((newCat) => newCat.category === filteredCategory))
      }
    }
    
    const apiProducts= async () => {
      try{
        const response = await fetch("https://fakestoreapi.com/products")
        const answer = await response.json()
        setProdFetch(answer) 
      }catch{
        console.log("ERROR");
      }  
    }

      useEffect(()=>{apiProducts()},[]) 

      useEffect(()=>
          {if(prodFetch.length > 0)
           setIsLoading(false) },[prodFetch])
      
      
      
return (
      <MyContext.Provider value={{categories, funcFilter, choosenCategory, prodFetch, isLoading, cart, setCart}}>
          <div className="App">
            <Nav />
            <Products />
            <Cart />
          </div>
      </MyContext.Provider>
 
  );
  
}
export default App;

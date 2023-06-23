'use client';

import React, {useState, useEffect} from 'react';
import { commerce } from '@lib/commerce';
import Navbar from '@components/NavBar';






const Paintings = () => {

    
const [products, setProducts]=useState([]);
const [cart, setCart] = useState({});
// const [featured, setFeatured] = useState([]);



const fetchProducts = async ()=>{
    const { data } = await commerce.products.list();
    setProducts(data);
}






const fetchCart = async ()=>{
    
    setCart(await commerce.cart.retrieve());
}

const handleAddToCart= async (productId, quantity)=>{
   
    const item= await commerce.cart.add(productId, quantity);
   setCart(item);
}

const handleUpdateCartQty =async (productId, quantity) => {
    
    const item = await commerce.cart.update(productId, { quantity })
    
    setCart(item)
    
  
  }

    const handleRemoveFromCart = async (lineItemId) => {
        const item=await commerce.cart.remove(lineItemId);
        setCart(item);
    }

    const handleEmptyCart=async()=>{
        const item=await commerce.cart.empty();
        setCart(item);
    }
 


useEffect(()=>{
    fetchProducts();
    fetchCart();
   
   
},[])

    console.log(products);

 
    
    return (
        <>
            <Navbar/>
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap space-x-2">

            <button type="button" className="outline_btn">All categories</button>
    <button type="button" class="outline_btn">Shoes</button>
    <button type="button" class="outline_btn">Bags</button>
    <button type="button" class="outline_btn">Electronics</button>
    <button type="button" class="outline_btn">Gaming</button>




            </div>


            <div class=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                   
                    <div className="grid">

                    <div key={product.key} className="max-w-sm bg-marron-oscuro/20 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="h-auto max-w-full rounded-t-lg" src={product.image.url} alt="product image" />
                        </a>
                        <div className="px-2 pb-5">
                            <a href="#">
                                <h5 class="text-md  tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
     
                            <div className="flex items-center justify-between ">
                                <span className="text-sm text-gray-900 dark:text-white">{product.description.replace(/(<([^>]+)>)/gi, "")}</span>
                                <a href="#"
                                    className="text-white bg-marron-oscuro 
                                    hover:bg-marron-masclaro focus:ring-4
                                    focus:outline-none
                                    focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center
                                    dark:bg-marron-muyclaro dark:hover:bg-marron-clarisimo
                                    dark:focus:ring-blue-800">See more</a>
                            </div>
                        </div>
                        </div> 
                    </div>    
                ))}
                </div>
                  
</>
      
  )
}

export default Paintings

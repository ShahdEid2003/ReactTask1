import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {
  const[count,setCount]=useState(0);
  const[showProduct,setProduct]=useState(false);
  const product = {
    name: 'iPhone 14',
    price: '$1200',
    description: 'A premium smartphone with advanced features.',
  };
  const increase= () =>{
    setCount(count+1);
  }
  const toggleShowProduct= () =>{
    setProduct(!showProduct);
  }
  
  return (
    <div className = "container">
      <h1>Count: {count}</h1>
      <div className="d-flex gap-3">
        <button className="btn btn-primary"onClick={increase}>Increment</button>
        <button className="btn btn-primary" onClick={()=>setCount(0)}>Reset</button>
      </div>
      <button className="btn btn-primary mt-3"onClick={toggleShowProduct}>Show product</button>
      {showProduct && (
        <div className="product-details">
          <h2>Product Details</h2>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description:{product.description}</p>
        </div>
      )}
    </div>
  )
}

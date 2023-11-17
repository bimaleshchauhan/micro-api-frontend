import React, { useReducer, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { onSignup, onGetProducts  } from '../store/actions'
import { ProductDetails } from "./ProductDetail";

const Home = () => {
  const { categories, products } = useSelector(state => state.shoppingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetProducts())      
  },[]);

  const listOfcategories = () => {
    return <div className="row" aria-label="Basic example">
      {categories.map(item => {
        return <button key={item} type="button" onClick={() => {}} className="btn btn-lg m-2" style={{ backgroundColor: '#4E8A37', borderRadius: 30, color: '#FFF'}}>
        {item.toUpperCase()}
        </button>
      })}
    </div>
  }

  const listOfProducts = () => {
    return products.map((item) => {
      return <ProductCard item={item}/>
    })
  }

  return (
    <div class="container-fluid p-0">
        <img src="ba1.jpg" class="card-img" alt="..."></img>
        <div className="container-flud mb-4 bg-indigo-200" style={{height:80, justifyContent: 'center', display: 'flex', flexDirection: 'column',}}>
            <div class="row justify-content-center">
              {categories && listOfcategories()}
            </div>
        </div> 
        <div className="flex flex-wrap px-5 pb-4">
            {products && listOfProducts()}       
        </div>
    </div>
  )
}


export { Home };

 
import React from "react";
//import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./products";
import "./shop.css";

export const Shop = () => {

//const [search, setSearch] = useState("");
  
  return (
    
    <div className="shop">
      <div className="shopTitle">
        <h1>DEV SHOPPING</h1>
        <input 
          type="text" 
          placeholder="Procurar..." 
          id="search"
          //value = {search} 
          //onChange={ e => setSearch(e.target.value) }
          ></input>
        </div>

      { <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div> }
    </div>
  );
};
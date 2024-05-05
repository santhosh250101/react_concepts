import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = (props) => {

  const state = useContext(CartContext);
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>price:$ {props.price}</h3>
      <button onClick={()=>state.setCart(state.cart + Number(props.price))}>Add to cart</button>
    </div>
  );
};

export default Item;

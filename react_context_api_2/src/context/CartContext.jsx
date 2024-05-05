import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props)=>{

    const [cart,setCart] = useState(0);
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
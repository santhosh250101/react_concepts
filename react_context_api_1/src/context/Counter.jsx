import { createContext } from "react";
import { useState } from "react";
export const CounterContext = createContext(null);

export const CounterProvider = (props)=>{

    const [count,setCount] = useState(100);
    return (
    <CounterContext.Provider value = {{count,setCount}}>
        {props.children}
    </CounterContext.Provider>);
}
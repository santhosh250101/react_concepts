import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const state = useContext(CartContext);
  console.log(state);
  return (
    <div className="App">
      <Item name="laptop" price="10"/>
      <Item name="desktop" price="20"/>
      <Item name="cpu" price="5"/>
      <h1>Cart value is {state.cart}</h1>
    </div>
  );
}

export default App;

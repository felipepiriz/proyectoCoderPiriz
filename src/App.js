import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./components/nav-bar";
import ItemsContainer from "./containers/item-container";
import ProductContainer from "./containers/product-container";
import ContextApp from "./context";
import Cart from "./containers/cart";

function App() {
  return (
    <BrowserRouter>
      <ContextApp >
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemsContainer/>} />
          <Route path={"/products/:category"} element={<ItemsContainer />}/>
          <Route path={"/product/:id"} element={<ProductContainer sx={{alingItems:"center" }}/>} />
          <Route path={"/cart"} element={<Cart/>} />
        </Routes>
      </ContextApp>
    </BrowserRouter>
    
  );
}

export default App;
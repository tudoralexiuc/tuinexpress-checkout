import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Checkout } from './components/Checkout/Checkout';
import Products from './components/Product/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;

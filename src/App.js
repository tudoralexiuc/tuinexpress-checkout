import { Routes, Route } from 'react-router-dom';
import { Checkout } from './pages/Checkout';
import { Products } from './pages/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;

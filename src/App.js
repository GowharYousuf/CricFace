import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import CartPage from './Pages/Cart';
import LoginPage from './Pages/Login'
import AdminDashbaord from './Pages/Admin';
import MyOrder from './Pages/MyOrders';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/admin" element={<AdminDashbaord/>}/>
          <Route path="/orders" element={<MyOrder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

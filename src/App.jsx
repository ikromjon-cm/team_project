import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import OrderList from './components/orderList/OrderList';
import ProductStock from './components/productStock/ProductStock';
import Pricing from './components/pricing/Pricing';
import Calendar from './components/calendar/Calendar';
import ToDo from './components/toDo/ToDo';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="appshell">
      <Sidebar />
      <div className="appmain">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order-lists" element={<OrderList />} />
          <Route path="/product-stock" element={<ProductStock />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

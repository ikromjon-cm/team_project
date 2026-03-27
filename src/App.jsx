import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'; 
import OrderList from './components/orderList/OrderList';

const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <OrderList/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './OrderList.css';

const ordersData = [
  { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '14 Feb 2026', type: 'Electric', status: 'Completed' },
  { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '14 Feb 2026', type: 'Book', status: 'Processing' },
  { id: '00003', name: 'Darrell Caldwell', address: '8587 Fargo Highway', date: '13 Feb 2026', type: 'Medicine', status: 'Rejected' },
  { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2026', type: 'Mobile', status: 'Completed' },
  { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2026', type: 'Watch', status: 'Processing' },
  { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2026', type: 'Medicine', status: 'Completed' },
  { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2026', type: 'Watch', status: 'Processing' },
  { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2026', type: 'Medicine', status: 'On Hold' },
  { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2026', type: 'Book', status: 'In Transit' },
];

const OrderList = () => {
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Processing': return 'status-processing';
      case 'Rejected': return 'status-rejected';
      case 'On Hold': return 'status-onhold';
      case 'In Transit': return 'status-intransit';
      default: return '';
    }
  };

  return (
    <div className="order-list-page">
      <h2 className="page-title">Order Lists</h2>

      <div className="filter-bar">
        <div className="filter-left">
          <div className="filter-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M7 12H17M10 18H14" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="filter-label">Filter By</span>
          
          <div className="filter-dropdown">
            14 Feb 2026
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div className="filter-dropdown">
            Order Type
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div className="filter-dropdown status-dropdown" onClick={() => setStatusDropdownOpen(!isStatusDropdownOpen)}>
            Order Status
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            
            {isStatusDropdownOpen && (
              <div className="status-popup" onClick={e => e.stopPropagation()}>
                <div className="popup-title">Select Order Status</div>
                <div className="status-buttons">
                  <button className="status-btn active-blue">Completed</button>
                  <button className="status-btn">Processing</button>
                  <button className="status-btn">Rejected</button>
                  <button className="status-btn">On Hold</button>
                  <button className="status-btn active-blue">In Transit</button>
                </div>
                <p className="popup-note">*You can choose multiple Order status</p>
                <button className="apply-btn" onClick={() => setStatusDropdownOpen(false)}>Apply Now</button>
              </div>
            )}
          </div>
        </div>
        
        <button className="reset-filter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          Reset Filter
        </button>
      </div>

      <div className="table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                <td className="fw-500">{order.id}</td>
                <td className="fw-500">{order.name}</td>
                <td className="text-gray">{order.address}</td>
                <td className="text-gray">{order.date}</td>
                <td className="text-gray">{order.type}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span className="pagination-info">Showing 1-09 of 78</span>
          <div className="pagination-controls">
            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

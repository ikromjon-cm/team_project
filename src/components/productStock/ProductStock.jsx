import React from 'react';
import './ProductStock.css';

const productsData = [
  { id: 1, name: 'Apple Watch Series 4', category: 'Watch', price: '$890.00', piece: 25, colors: ['#1e293b', '#eab308', '#ef4444'], image: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Microsoft Heads...', category: 'Headset', price: '$190.00', piece: 45, colors: ['#1e293b', '#eab308', '#ef4444', '#3b82f6'], image: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Women\'s Dress', category: 'Clothes', price: '$21.00', piece: 12, colors: ['#1e293b', '#eab308', '#3b82f6'], image: 'https://via.placeholder.com/40' },
  { id: 4, name: 'Samsung Galaxy...', category: 'Mobile', price: '$400.00', piece: 50, colors: ['#1e293b', '#eab308', '#ef4444', '#3b82f6'], image: 'https://via.placeholder.com/40' },
  { id: 5, name: 'Wood Table', category: 'Furniture', price: '$120.00', piece: 10, colors: ['#1e293b', '#eab308'], image: 'https://via.placeholder.com/40' },
  { id: 6, name: 'Gaming Chair', category: 'Furniture', price: '$200.00', piece: 30, colors: ['#1e293b', '#eab308', '#ef4444'], image: 'https://via.placeholder.com/40' },
];

const ProductStock = () => {
  return (
    <div className="stock-page">
      <h2 className="page-title">Product Stock</h2>

      <div className="stock-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>PIECE</th>
              <th>AVAILABLE COLOR</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className="product-image" />
                </td>
                <td className="product-name">{product.name}</td>
                <td className="product-category">{product.category}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-piece">{product.piece}</td>
                <td>
                  <div className="color-dots">
                    {product.colors.map((color, i) => (
                      <span key={i} className="color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn edit-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button className="icon-btn trash-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductStock;

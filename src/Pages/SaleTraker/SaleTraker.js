import React from 'react';
import './SaleTraker.css';
import track from '../../image/track.png';

const SaleTraker = () => {
  return (
    <div className="revenue-container">
      <div className="info-section">
        <img src={track} alt="Revenue Chart" className="revenue-chart" />
      </div>
      
        <div className="content-traker">
          <div className='icon-traker'>
            <div className="icon">🔍</div>
            <h2 className='sales'>Sales Tracker</h2>
          </div>
          <h1>Monitor Stores Daily Revenue</h1>
          <p>Add Shopify stores and products to Sales Tracker to track performance over time, monitor sales, and spot the next big opportunity before others.</p>
          <button className="try-free-btn">Try For Free</button>
        </div>
    </div>
  );
};

export default SaleTraker;
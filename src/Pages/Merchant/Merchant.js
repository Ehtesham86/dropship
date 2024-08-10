import React from 'react';
import './Merchant.css';
import merchant from '../../image/merchant.png';

const JoinMerchants = () => {
  return (
    <div className="join-merchants">
      <div className="content">
        <h1>Join 45,000+ Merchants Using Dropship</h1>
        <div className="wave-icon">〰️</div>
        <p>Take advantage of Dropship's spy tools to make your selling journey easier while increasing your chances of success.</p>
        <button className="try-for-free">Try For Free</button>
      </div>
      <div className="image-container">
        <img src={merchant} alt="Dropship dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default JoinMerchants;
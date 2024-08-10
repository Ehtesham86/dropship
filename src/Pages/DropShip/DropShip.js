import React from 'react';
import './DropShip.css';
import spy from '../../image/spy.png';

const DropshipSpyTools = () => {
  return (
    <div className="dropship">
      <h1 className="main-title">Dropship Spy Tools</h1>
      <p className="subtitle">Take your product research to the next level with Dropship.</p>
      
      <div className="content-wrapper">
        <div className="left-section">
          <div className="product-database">
            <h2>Product Database</h2>
            <h3>Spy On What Products Are Selling</h3>
            <p>Spy on millions of products and see how much revenue they are making in real-time with Product Database.</p>
            <button className="try-free-btn">Try For Free</button>
          </div>
        </div>
        <div className="right-section">
          <img src={spy} alt="Product list" className="product-list-image" />
        </div>
      </div>
    </div>
  );
};

export default DropshipSpyTools;
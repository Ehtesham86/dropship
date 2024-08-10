import React from 'react';
import './Shopfy.css';
import video from '../../image/video.mp4';

const ShopifyTracker = () => {
  return (
    <div className="shopfy">
      <div className="left-section">
        <video width="600" autoPlay loop muted>
            <source src={video} type="video/mp4" className="browser-image" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div className="right-section">
        <h1>Track The Revenue Of Shopify Stores With One Click</h1>
        <p className='shopft-con'>
          Dropship enables real-time access to a Shopify store's
          product offerings and revenue data. Empowering you to
          identify winning products and minimize the risk of selling
          low-performing items.
        </p>
        <button className="cta-button">Try For Free</button>
      </div>
    </div>
  );
};

export default ShopifyTracker;
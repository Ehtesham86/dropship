import React, { useState, useEffect } from 'react';
import './DiscoverProduct.css';
import product1 from "../../image/product1.webp";
import product2 from "../../image/product2.webp";    
import product3 from "../../image/product3.webp";
import product4 from "../../image/product4.webp";
import product5 from "../../image/product5.webp";
import product6 from "../../image/product6.webp";
import product7 from "../../image/product7.webp";
import product8 from "../../image/product8.webp";
import product9 from "../../image/product9.webp";
import google from "../../image/google.png";
import people from "../../image/people.webp";

const DiscoverProducts = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const products = [
      {
        image: product1,
        name: "Kid's Cap",
        price: '$19.99',
        revenue: '$4,717.64',
        sales: 236
      },
      {
        image:  product2,
        name: 'Ceramic Bowl',
        price: '$24.99',
        revenue: '$3,892.45',
        sales: 156
      },
      {
        image: product3,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product4,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product5,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product6,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product7,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product8,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      },
      {
        image: product9,
        name: 'Mini Drone',
        price: '$99.99',
        revenue: '$7,945.80',
        sales: 79
      }
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);
  
      return () => clearInterval(timer);
    }, [products.length]);
  
    const currentProduct = products[currentImageIndex];
  
    return (
      <div className="container">
        <div className="left-section">
          <h1>Discover <span className="highlight">Winning Products</span> To Sell</h1>
          <p>Find and monitor stores to gain insights into their revenue, sales, products, apps, and more.</p>
          <div className="extension-info">
            <button className="start-trial">Start Free Trial</button>
            <button className='chrome'><img src={google} alt="Chrome" className="chrome-icon" />Install Extension</button>
          </div>
            <div className="user-avatars">
              <img className='people' src={people} alt='people'/>
              <span>Join 45,000+ merchants</span>
            </div>
        </div>
        <div className="right-section">
            <div className="product-carousel">
                <div className="carousel-track" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {products.map((product, index) => (
                    <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                ))}
                </div>
            </div>
          <div className="stats-card">
            <div className="stats-header">
              <span>{currentProduct.name}</span>
              <span className="price">Price {currentProduct.price}</span>
            </div>
            <div className="stats-body">
              <div className="stat">
                <span className="stat-label">REVENUE TODAY</span>
                <span className="stat-value">{currentProduct.revenue}</span>
              </div>
              <div className="stat">
                <span className="stat-label">SALES</span>
                <span className="stat-value">{currentProduct.sales}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DiscoverProducts;
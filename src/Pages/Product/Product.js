import React from 'react';
import './Product.css';

const row1Images = [
  require('../../image/product1.webp'),
  require('../../image/product2.webp'),
  require('../../image/product3.webp'),
  require('../../image/product4.webp'),
  require('../../image/product5.webp'),
  require('../../image/product6.webp'),
  require('../../image/product7.webp'),
  require('../../image/product8.webp'),
  require('../../image/product9.webp'),
  require('../../image/product10.png'),
];
const row2Images = [
  require('../../image/product5.webp'),
  require('../../image/product6.webp'),
  require('../../image/product7.webp'),
  require('../../image/product15.png'),
  require('../../image/product16.png'),
  require('../../image/product17.png'),
  require('../../image/product8.webp'),
  require('../../image/product9.webp'),
  require('../../image/product18.png'),
  require('../../image/product19.png'),
];
const row3Images = [
  require('../../image/product11.webp'),
  require('../../image/product12.png'),
  require('../../image/product13.webp'),
  require('../../image/product14.png'),
  require('../../image/product15.png'),
  require('../../image/product16.png'),
  require('../../image/product17.png'),
  require('../../image/product18.png'),
  require('../../image/product19.png'),
  require('../../image/product20.png'),
];

function Product() {
  return (
    <div className="product">
      <div className="content">
        <h1>Millions Of Products At Your Fingertips</h1>
        <p>Find your next profitable product by exploring our vast database with millions of products. Use our smart filters to refine your search and find products tailored to your interests and niche.</p>
        <button>Try For Free</button>
      </div>
      <div className="image-grid">
        <div className="scroll-container">
          <div className="scroll-inner">
            {row1Images.map((image, index) => (
              <img src={image} alt={`Product ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-inner1">
            {row2Images.map((image, index) => (
              <img src={image} alt={`Product ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-inner">
            {row3Images.map((image, index) => (
              <img src={image} alt={`Product ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

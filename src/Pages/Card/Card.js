import React from 'react';
import './Card.css';
import card from '../../image/card.png';
import card1 from '../../image/card1.png';
import search from '../../image/search.svg';
import portfolio from '../../image/portfolio.svg';

const ProductCards = () => {
  return (
    <div className="container-card">
      <div className="card competitor-research">
        <div className='icons'>
            <img className='icon' src={search} alt='search'/>
            <h2>Competitor Research</h2>
        </div>
        <h1>Find Who To Spy On</h1>
        <p>Make laser-targeted searches on millions of products to find stores selling the products you're researching.</p>
        <button className="try-for-free">Try For Free</button>
        <img src={card1} alt="Competitor Research" className="card-image" />
      </div>
      
      <div className="card portfolio">
        <div className='icons'>
            <img className='icon' src={portfolio} alt='portfolio'/>
            <h2>Portfolio</h2>
        </div>
        <h1>Receive The Best Products Weekly</h1>
        <p>On Monday at 12 PM EST every week, a drop containing up to 40 winning products is released to your Portfolio.</p>
        <button className="try-for-free">Try For Free</button>
        <img src={card} alt="Portfolio" className="card-image" />
      </div>
    </div>
  );
};

export default ProductCards;
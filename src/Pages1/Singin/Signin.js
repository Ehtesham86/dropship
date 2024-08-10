import React, { useState, useEffect } from 'react';
import './Signin.css';

const images = [
  'path_to_image1',
  'path_to_image2',
  'path_to_image3'
];

const SignIn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="signin-logo">
          <img src="path_to_logo" alt="Logo" />
        </div>
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <input type="email" className="input-field" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" className="input-field" placeholder="Password" />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
          <div className="signin-options">
            <label>
              <input type="checkbox" className="remember-me" /> Remember Me
            </label>
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </div>
          <p className="signin-or">Sign In With</p>
          <div className="signin-social">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
            <button className="apple-btn">Apple</button>
          </div>
          <p className="signin-signup">
            New to Dropship? <a href="/signup" className="signup-link">Get Started</a>
          </p>
        </form>
      </div>
      <div className="signin-right">
        <div className="carousel">
          <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
        </div>
        <h2 className="right-title">Find Winning Products With Smart Filters</h2>
        <p className="right-subtitle">
          Using smart filters, you can find winning products that are tailored to your specific requirements, niche, and preferences.
        </p>
        <div className="filters">
          <div className="filter">
            <label>Price</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div className="filter">
            <label>Sales</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div className="filter">
            <label>Revenue</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div className="filter">
            <label>Store Products</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div className="filter">
            <label>Product Images</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
          <div className="filter">
            <label>Variants</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

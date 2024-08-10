import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img src="path_to_logo" alt="Logo" />
      </div>
      <h2 className="signup-title">Try Dropship.io For Free</h2>
      <p className="signup-subtitle">Get started - it's quick</p>
      <div className="signup-buttons">
        <button className="google-btn">Google</button>
        <button className="apple-btn">Apple</button>
      </div>
      <p className="signup-or">or sign up with</p>
      <form className="signup-form">
        <div className="form-group">
          <input type="text" className="input-field" placeholder="First Name" />
          <input type="text" className="input-field" placeholder="Last Name" />
        </div>
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Password" />
        <button type="submit" className="create-account-btn">Create Account</button>
      </form>
      <p className="signin-link">
        Already have an account? <a href="/login" className="link">Sign In</a>
      </p>
      <p className="terms-conditions">
        By signing up, you agree to our <a href="/privacy" className="link">Privacy Policy</a> and <a href="/terms" className="link">Terms & Conditions</a>
      </p>
    </div>
  );
};

export default Signup;

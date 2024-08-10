import React from 'react';
import './footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='foot-cont'>
            <div className="footer-top">
                <div className="footer-top-item">
                    <span>24-Hour Customer Support</span>
                </div>
                <div className="footer-top-item">
                    <span>7-Day Free Trial</span>
                </div>
                <div className="footer-top-item">
                    <span>Cancel Anytime</span>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-section company-info">
                    <h3>Discover Winning Products To Sell</h3>
                    <p>Built by sellers for sellers with the mission to help entrepreneurs start and grow successful businesses.</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-tiktok"></i>
                        <i className="fab fa-discord"></i>
                    </div>
                    <address>
                        <strong>Dropship FZCO</strong><br />
                        Premises No: 33007-001, IFZA Business Park, Dubai Silicon Oasis, DDP, Building A1<br />
                        United Arab Emirates
                    </address>
                </div>
                <div className="footer-section">
                    <h4>Products</h4>
                    <ul>
                        <li>Product Database</li>
                        <li>Sales Tracker</li>
                        <li>Top Stores <span className="new">NEW</span></li>
                        <li>Top Products <span className="new">NEW</span></li>
                        <li>Competitor Research</li>
                        <li>Portfolio</li>
                        <li>Dropship Extension <span className="new">NEW</span></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Free Tools</h4>
                    <ul>
                        <li>Interest Explorer</li>
                        <li>Number Breakdown</li>
                        <li>CPA Calculator</li>
                        <li>ROAS Calculator</li>
                        <li>BEROAS Calculator</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Affiliate Program</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Dropship University</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Dropship. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="#">Cookie</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
                <div className="footer-language">
                    <a href="#">EN</a>
                    <a href="#">DE</a>
                    <a href="#">ES</a>
                    <a href="#">FR</a>
                    <a href="#">NL</a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;

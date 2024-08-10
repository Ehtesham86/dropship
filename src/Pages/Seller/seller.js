import React from 'react'
import './Seller.css';
import shopifyLogo from "../../image/shopify.svg";
import amazonLogo from "../../image/amazon.svg";
import ebayLogo from "../../image/ebay.svg";
import wixLogo from "../../image/wix.svg";
import woocommerceLogo from "../../image/woocommerce.svg";
import bigcommerceLogo from "../../image/bigcommerce.svg";


const Seller = () => {
    return (
        <div className="container-seller">
          <div className="header">APPLIES TO ALL SELLERS</div>
          <div className="logos">
            <img src={shopifyLogo} alt="Shopify" />
            <img src={amazonLogo} alt="Amazon" />
            <img src={ebayLogo} alt="eBay" />
            <img src={wixLogo} alt="Wix" />
            <img src={woocommerceLogo} alt="WooCommerce" />
            <img src={bigcommerceLogo} alt="BigCommerce" />
          </div>
        </div>
      );
}

export default Seller;

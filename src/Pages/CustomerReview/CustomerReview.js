import React from 'react';
import './CustomerReview.css';
import review1 from "../../image/review1.png";
import review2 from "../../image/review2.png";
import review3 from "../../image/review3.png";
import review4 from "../../image/review4.png";
import review5 from "../../image/review5.png";
import review6 from "../../image/review6.png";
import review7 from "../../image/review7.png";
import review8 from "../../image/review8.png";


const reviews = [
    { id: 1, image: review1 },
    { id: 2, image: review2 },
    { id: 3, image: review3 },
    { id: 4, image: review4 },
    { id: 5, image: review5 },
    { id: 6, image: review6 },
    { id: 7, image: review7 },
    { id: 8, image: review8 }
];

const CustomerReviews = () => {
    return (
        <div className="customer-reviews">
            <h2>What Our Customers Say</h2>
            <div className="review-slider">
                <div className="review-track">
                    {reviews.map(review => (
                        <div className="review-card" key={review.id}>
                            <img src={review.image} alt={`Review ${review.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="cta-section">
                <h3>Try Dropship <span>Today</span></h3>
                <p>Try Dropship with a 7-day free trial. 100% risk-free. Cancel anytime.</p>
                <button className="cta-button">Try for Free</button>
            </div>
        </div>
    );
};

export default CustomerReviews;

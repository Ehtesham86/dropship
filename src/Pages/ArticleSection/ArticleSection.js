import React from 'react';
import './ArticleSection.css'; 
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";
import image3 from "../../image/image3.png";
import image4 from "../../image/image4.png";
import image5 from "../../image/image5.png";
import image6 from "../../image/image6.png";

const articles = [
    {
        id: 1,
        category: "PRODUCTS",
        title: "19 Bestselling Items on the Facebook Marketplace in 2024",
        date: "July 4, 2024",
        image: image1,
        link: "#"
    },
    {
        id: 2,
        category: "GENERAL",
        title: "How To Start a Dropshipping Business With No Money in 2024",
        date: "July 4, 2024",
        image: image2,
        link: "#"
    },
    {
        id: 3,
        category: "GENERAL",
        title: "5 Best Dropshipping Success Stories To Learn From in 2024",
        date: "July 4, 2024",
        image: image3,
        link: "#"
    },
    {
        id: 4,
        category: "GENERAL",
        title: "Does Facebook Marketplace Charge Fees?",
        date: "July 4, 2024",
        image: image4,
        link: "#"
    },
    {
        id: 5,
        category: "GENERAL",
        title: "12 Best AI Tools for Dropshipping In 2024 - Free & Paid",
        date: "June 19, 2024",
        image: image5,
        link: "#"
    },
    {
        id: 6,
        category: "GENERAL",
        title: "15 Best Dropshipping Websites for Running an Ecommerce Store",
        date: "June 19, 2024",
        image: image6,
        link: "#"
    }
];

const ArticleSection = () => {
    return (
        <section className="article-section">
            <div className="article-header">
                <h2>Browse Our Latest Articles</h2>
                <a href="#" className="visit-blog">Visit Blog</a>
            </div>
            <div className="article-grid">
                {articles.map(article => (
                    <div className="article-card" key={article.id}>
                        <a href={article.link}>
                            <img src={article.image} alt={article.title} className="article-image"/>
                            <div className="article-info">
                                <span className="article-category">{article.category}</span>
                                <h3 className="article-title">{article.title}</h3>
                                <span className="article-date">{article.date}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ArticleSection;

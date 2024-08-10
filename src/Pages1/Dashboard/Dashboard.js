import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import ToolCard from '../Toolcard/Toolcard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="tool-cards">
          <ToolCard title="Ad Spot" />
          <ToolCard title="Product Database" />
          <ToolCard title="Sales Tracker" />
          <ToolCard title="Competitor Research" />
          <ToolCard title="Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

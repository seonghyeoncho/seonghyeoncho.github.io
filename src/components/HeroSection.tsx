import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="logo">Seonghyeon Cho</div>

      <div className="content">
        <h1 className="title">AI Researcher</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

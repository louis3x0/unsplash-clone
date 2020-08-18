import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-content">
        <h1 className="t1">Unsplash</h1>
        <span className="t2">
          The internet’s source of <p>freely-usable images</p>
        </span>
        <p className="t3">Powered by creators everywhere</p>
        <form className="search-bottom">
          <input type="text" placeholder="Search free high-resolution photos" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="trending-container">
          <p className="trending-top">Trending:</p>
          <p className="trending">flower,</p>
          <p className="trending">wallpapers,</p>
          <p className="trending">backgrounds,</p>
          <p className="trending">happy,</p>
          <p className="trending">love.</p>
        </div>
      </div>
      <div className="bottom-text">
        <span>Photo of the Day by Louis</span>
        <span>Read more about the Unsplash License</span>
        <span>All you need to create a website.</span>
      </div>
    </div>
  );
};

export default Hero;

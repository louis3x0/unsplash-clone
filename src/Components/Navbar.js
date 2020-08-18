import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="" className="logo">
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 0 32 32"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </a>
        <div className="text">
          <span className="top">Unsplash</span>
          <span className="bottom">Photos for everyone</span>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search photos" />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

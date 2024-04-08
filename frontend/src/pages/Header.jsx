import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            {" "}
            <i className="fas fa-book"></i> PICTBOOKS{" "}
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="./cart.html" className="fas fa-shopping-cart"></a>
            <a href="http://localhost:5173/books/login">Login</a>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="./index.html">home</a>
            <a href="#featured">featured</a>
            <a href="#">category</a>
            <a href="#reviews">reviews</a>
            <a href="./feedback.html">feedback</a>
          </nav>
        </div>
      </header>
      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home"></a>
        <a href="#featured" className="fas fa-list"></a>
        <a href="#arrivals" className="fas fa-tags"></a>
        <a href="#reviews" className="fas fa-comments"></a>
        <a href="#feedback" className="fas fa-feedback"></a>
      </nav>
    </>
  );
}

import React from "react";

export default function Header() {
  const authToken = localStorage.getItem("authToken");
  return (
    <>
      <header class="header">
        <div class="header-1">
          <a href="#" class="logo">
            {" "}
            <i class="fas fa-book"></i> PICTbooks{" "}
          </a>

          <form action="" class="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label for="search-box" class="fas fa-search"></label>
          </form>

          <div class="icons">
            <div id="search-btn" class="fas fa-search"></div>
            <a href="./cart.html" class="fas fa-shopping-cart"></a>
            <div id="login-btn" class="fas fa-user"></div>
          </div>
        </div>

        <div class="header-2">
          <nav class="navbar">
            <a href="./index.html">Home</a>
            <a href="#featured">Featured</a>
            <a href="#reviews">Reviews</a>
            {authToken ? (
              <a
                href="#"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  window.location.reload();
                }}
              >
                logout
              </a>
            ) : (
              <>
                <a href="/books/login">Login</a>
                <a href="./books/signUp">Signup</a>
              </>
            )}
          </nav>
        </div>
      </header>

      <nav class="bottom-navbar">
        <a href="#home" class="fas fa-home"></a>
        <a href="#featured" class="fas fa-list"></a>
        <a href="#arrivals" class="fas fa-tags"></a>
        <a href="#reviews" class="fas fa-comments"></a>
        <a href="#feedback" class="fas fa-feedback"></a>
      </nav>
    </>
  );
}

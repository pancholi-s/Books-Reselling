import React from "react";
import { useEffect } from "react";
import Swiper from "swiper";

export default function Featured() {
  useEffect(() => {
    const swiper = new Swiper(".books-slider", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []); // Empty array as the second argument to run the effect only once
  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>featured books</span>{" "}
      </h1>

      <div className="swiper featured-slider ">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <a href="./product.html">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png"
                  alt=""
                />{" "}
              </a>
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 500 <span>Rs.600</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <a href="./product.html">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-2.png"
                  alt=""
                />{" "}
              </a>
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 300 <span>Rs.450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <a href="product.html">
                <img
                  src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-3.png"
                  alt=""
                />{" "}
              </a>
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-4.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-5.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350<span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-6.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-7.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-8.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-9.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="icons">
              <a href="#" className="fas fa-search"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-10.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>featured books</h3>
              <div className="price">
                Rs. 350 <span>Rs. 450</span>
              </div>
              <a href="./cart.html" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
}

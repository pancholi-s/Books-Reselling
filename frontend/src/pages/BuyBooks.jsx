import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

function BuyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleBuy = async (bookId) => {
    const isConfirmed = window.confirm("Do you want to buy this book?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5555/books/${bookId}`);
        setBooks(books.filter((book) => book._id !== bookId));
      } catch (error) {
        console.log("Error buying book:", error);
      }
    }
  };

  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>Books</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => {
          return (
            <div key={book._id} className="swiper featured-slider ">
              <div className="swiper-wrapper">
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                  </div>
                  <div className="image flex justify-center">
                    <a href="./product.html">
                      {" "}
                      <img src={book.coverImage} alt="" />{" "}
                    </a>
                  </div>
                  <div className="content">
                    <h3>{book.title}</h3>
                    <h3>{`Rs ${book.cost}`}</h3>
                    <button className="btn" onClick={() => handleBuy(book._id)}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BuyBooks;

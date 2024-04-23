import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

function BuyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      return;
    }
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        const availableBooks = response.data.data.filter(
          (book) => !book.isSold
        );
        setBooks(availableBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleBuy = async (bookId) => {
    navigate(`/books/buy/${bookId}`);
  };
  if (!authToken) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <p className="mb-4 text-lg text-gray-700">Please login first</p>
          <Link to="/books/login" className="mb-2">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
          <Link to="/books/signUp">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </>
    );
  }
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

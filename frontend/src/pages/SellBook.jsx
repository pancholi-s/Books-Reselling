import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/books/BooksTable";
import BooksCard from "../components/books/BooksCard";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
// import Category from "../components/home/Category";
import Review from "../components/home/Review";
import Footer from "../components/home/Footer";

export default function SellBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      return;
    }
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
  if (!authToken) {
    return (
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
    );
  }
  return (
    <div className="p-4">
      {/* Centering the h1 within its parent container */}
      <div className="flex justify-center my-8">
        <h1 className="text-3xl">BOOKS LIST</h1>
      </div>

      {/* Adding a separate section for the Add button with justify-end */}
      <div className="flex justify-end">
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {/* The BooksCard component */}
      {<BooksCard books={books} />}
    </div>
  );
}

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
      <>
        <p>Please login first</p>
        <Link to="/books/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/books/signUp">
          <button className="btn">Sign Up</button>
        </Link>
      </>
    );
  }
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4"></div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {<BooksCard books={books} />}
    </div>
  );
}

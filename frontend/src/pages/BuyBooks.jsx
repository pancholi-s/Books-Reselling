import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

function BuyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
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
    const isConfirmed = window.confirm('Do you want to buy this book?');
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5555/books/${bookId}`);
        setBooks(books.filter(book => book._id !== bookId));
      } catch (error) {
        console.log('Error buying book:', error);
      }
    }
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book._id} className="card">
              <h3 className='border border-gray-600 py-1 text-center text-lg w-1/2 rounded mb-2'>{book.title}</h3>
              <p className='border border-gray-600 py-1 text-center mb-2 text-lg w-1/2 rounded'>{book.author}</p>
              <button className='px-4 py-1 hover:bg-green-900 ml-16 text-white rounded-sm bg-green-600' onClick={() => handleBuy(book._id)}>Buy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BuyBooks;

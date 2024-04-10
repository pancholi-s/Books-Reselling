import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <div key={item._id} className="card">
          <BookSingleCard book={item} />
          <div className="actions">
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className='text-2xl text-green-800' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;

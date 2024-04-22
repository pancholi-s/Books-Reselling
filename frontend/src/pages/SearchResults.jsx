import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // To get the query from the URL
import axios from "axios"; // For making HTTP requests

export default function SearchResults() {
  const [results, setResults] = useState([]); // State to hold search results
  const location = useLocation(); // Get the current URL location

  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams(location.search); // Parse the query string
      const searchTerm = query.get("query"); // Get the search term

      const response = await axios.get(`/books/search?title=${encodeURIComponent(searchTerm)}`);
      setResults(response.data.data); // Store the search results
    };

    fetchData(); // Fetch data when component is mounted or query changes
  }, [location.search]); // Re-run the effect when the query string changes

  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {results.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} (Published in {book.publishYear})
          </li>
        ))}
      </ul>
    </div>
  );
}
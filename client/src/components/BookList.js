import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Reviews</h1>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <h3>Reviews:</h3>
          {book.reviews.map((review, index) => (
            <p key={index}>{review.text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookList;
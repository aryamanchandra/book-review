import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();

    // Load favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (query) => {
    const filtered = books.filter((book) => {
      const { title, author, genre } = book;
      const searchTerms = query.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerms) ||
        author.toLowerCase().includes(searchTerms) ||
        genre.toLowerCase().includes(searchTerms)
      );
    });
    setFilteredBooks(filtered);
  };

  const handleGenreFilter = (genre) => {
    const filtered = books.filter(
      (book) => book.genre.toLowerCase() === genre.toLowerCase()
    );
    setFilteredBooks(filtered);
  };

  const handleAddToFavorites = (book) => {
    const updatedFavorites = [...favorites, book];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleRemoveFromFavorites = (book) => {
    const updatedFavorites = favorites.filter((fav) => fav._id !== book._id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (book) => {
    return favorites.some((fav) => fav._id === book._id);
  };

  return (
    <section>
      <div className="container">
        <h1 className="center">Book Reviews</h1>
        <div className="book-list">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className={`book ${isFavorite(book) ? "favorite" : ""}`}
            >
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <h3>Reviews:</h3>
              {book.reviews.map((review, index) => (
                <p key={index}>{review.text}</p>
              ))}
              {isFavorite(book) ? (
                <button onClick={() => handleRemoveFromFavorites(book)}>
                  <img
                    src="../../public/heart-icon-filled.png"
                    alt="Remove from Favorites"
                    className="heart-icon"
                  />
                </button>
              ) : (
                <button onClick={() => handleAddToFavorites(book)}>
                  <img
                    src="../../public/hearticon.png"
                    alt="Add to Favorites"
                    className="heart-icon"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
        <h2 className="center">Favorites</h2>
        <div className="book-list">
          {favorites.map((book) => (
            <div key={book._id} className="book">
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <h3>Reviews:</h3>
              {book.reviews.map((review, index) => (
                <p key={index}>{review.text}</p>
              ))}
              <button onClick={() => handleRemoveFromFavorites(book)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch, onGenreFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/genres');
        setGenres(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleGenreFilter = (genre) => {
    onGenreFilter(genre);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className='searchBar'>
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <button type="submit">Search</button>
      </form>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleGenreFilter(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
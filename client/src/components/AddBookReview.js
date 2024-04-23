import React, { useState } from 'react';
import axios from 'axios';

const AddBookReview = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/books', {
        title,
        author,
        genre,
        review,
      });
      console.log(response.data);
      // Reset form fields
      setTitle('');
      setAuthor('');
      setGenre('');
      setReview('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className="center">Add Book Review</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="review">Review:</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBookReview;
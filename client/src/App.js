import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import BookList from './components/BookList';
import AddBookReview from './components/AddBookReview';
import AboutUsPage from './components/About';
import ForumList from './components/ForumList';
import ForumDetails from './components/ForumDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/books">Book Reviews</Link>
            </li>
            <li>
              <Link to="/add-review">Add Review</Link>
            </li>
            <li>
              <Link to="/forums">Forums</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-review" element={<AddBookReview />} />
          <Route path="/forums" element={<ForumList />} />
          <Route path="/forums/:id" element={<ForumDetails />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

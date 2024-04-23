const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a new book review
router.post('/', async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    reviews: [{ text: req.body.review }],
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
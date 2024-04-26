const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/book-review-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const booksRoutes = require('./routes/books');
const forumsRoutes = require('./routes/forums');

app.use('/api/books', booksRoutes);
app.use('/api/forums', forumsRoutes);

const Book = require('./models/Book');

app.get('/api/genres', async (req, res) => {
  try {
    const genres = await Book.distinct('genre');
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
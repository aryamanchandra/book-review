const express = require('express');
const router = express.Router();
const Forum = require('../models/Forum');

router.get('/', async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.json(forum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newForum = new Forum({ title, description });

  try {
    const forum = await newForum.save();
    res.status(201).json(forum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/:id/comments', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }

    const { comment, username } = req.body;
    forum.comments.push({ comment, username });
    const updatedForum = await forum.save();
    res.json(updatedForum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
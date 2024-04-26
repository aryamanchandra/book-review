import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ForumDetail.css";

const ForumDetails = () => {
  const { id } = useParams();
  const [forum, setForum] = useState({});
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/forums/${id}`)
        .then((res) => setForum(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/forums/${forum._id}/comments`, {
        comment,
        username,
      })
      .then((res) => {
        setForum(res.data);
        setComment("");
        setUsername("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="forum-list-container">
      <h2 className="forum-title">{forum.title}</h2>
      <p className="forum-description">{forum.description}</p>
      <h3 className="comment-list">Comments</h3>
      <ul className="comment-list">
        {forum.comments &&
          forum.comments.map((comment, index) => (
            <li key={index} className="comment">
              <p className="comment-text">{comment.comment}</p>
              <p className="comment-username">By: {comment.username}</p>
            </li>
          ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default ForumDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForumList.css";

const ForumList = () => {
  const [forums, setForums] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/forums")
      .then((res) => setForums(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddForum = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/forums", { title, description })
      .then((res) => {
        setForums([...forums, res.data]);
        setTitle("");
        setDescription("");
        setShowAddForm(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="forum-list-container">
      <div className="header">
        <h2 className="forum-list-title">Forums</h2>
        <button
          className="add-forum-button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "Add Forum"}
        </button>
      </div>
      {showAddForm && (
        <form className="forum-form" onSubmit={handleAddForum}>
          <input
            className="forum-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="forum-textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Add Forum</button>
        </form>
      )}
      <ul>
        {forums.map((forum) => (
          <li key={forum._id}>
            <Link to={`/forums/${forum._id}`}>{forum.title}</Link>
            <p>{forum.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;

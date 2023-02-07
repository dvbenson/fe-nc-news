import React, { useState, useEffect } from "react";
import { getTopics } from "../utils";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../styles/Navbar.css";

function Navbar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, [setTopics]);

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-elements">
          <ul>
            <li key={uuidv4()}>
              <Link to="/login">Login</Link>
            </li>
            <li key={uuidv4()}>
              <Link to="/">Home</Link>
            </li>
            <li key={uuidv4()}>
              <Link to="/articles">All News</Link>
            </li>
            {topics.map((topic) => {
              return (
                <li key={uuidv4()}>
                  <Link to={`/topics/${topic.slug}`}>
                    {capFirstLetter(topic.slug)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

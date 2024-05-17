import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Avatar1 from "../images/avatar-1.jpg";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Dummy Author 1", posts: 3 },
  { id: 2, avatar: Avatar1, name: "Dummy Author 2", posts: 5 },
  { id: 3, avatar: Avatar1, name: "Dummy Author 3", posts: 0 },
  { id: 4, avatar: Avatar1, name: "Dummy Author 4", posts: 2 },
  { id: 5, avatar: Avatar1, name: "Dummy Author 5", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No users/authors found.</h2>
      )}
    </section>
  );
};

export default Authors;

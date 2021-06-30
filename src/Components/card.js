import React from "react";
import { Link } from "react-router-dom";
export default function Card({ article, id }) {
  return (
    <div className="Card">
      <div className="Card-left">
        <div className="author">{article.author}</div>{" "}
        <Link to={"/articles/" + id}>
          <div className="title">
            <h2> {article.title}</h2>
          </div>
        </Link>
        <div className="caption">{article.caption}</div>
        <div className="timing">
          <div className="date">{article.timing}</div>
        </div>
      </div>
      <div className="Card-right"></div>
    </div>
  );
}

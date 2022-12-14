import { useEffect, useState } from "react";

import "./styles.css";

function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.tabnews.com.br/api/v1/contents")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="card">
            <header>
              <h1>{post.title}</h1>
              <img src="folder-solid.svg" alt="folder" />
            </header>
            <footer>
              <span className="tab-coins">{post.tabcoins}</span>
              <span className="date">{post.published_at}</span>
            </footer>
          </div>
        );
      })}
    </>
  );
}

export default Card;

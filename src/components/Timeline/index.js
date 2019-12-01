import React, { useState, useEffect } from "react";

import { Container, NoResults } from "./styles";
import PostCard from "../PostCard";

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  if (posts.length === 0) {
    return <NoResults>Sem posts por enquanto</NoResults>;
  }

  return (
    <Container>
      {posts.map(post => (
        <PostCard
          key={post.id}
          author={post.author}
          date={post.date}
          content={post.content}
          comments={post.comments}
        />
      ))}
    </Container>
  );
};

export default Timeline;

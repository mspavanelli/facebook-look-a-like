import React from "react";

import { Container, Content, Comments, Comment, PostInfo, Divisor, Avatar } from "./styles";

const PostCard = ({ author, date, content, comments }) => (
  <Container>
    <Content>
      <PostInfo>
        <Avatar src={author.avatar} alt={author.name} />
        <div className="meta">
          <span className="author">{author.name}</span>
          <span className="date">{date}</span>
        </div>
      </PostInfo>
      <p>{content}</p>
    </Content>
    <Divisor />
    <Comments>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Avatar src={comment.author.avatar} alt="try" />
          <div className="content">
            <strong>{comment.author.name}</strong> <span>{comment.content}</span>
          </div>
        </Comment>
      ))}
    </Comments>
  </Container>
);

export default PostCard;

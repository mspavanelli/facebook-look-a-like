import styled from "styled-components";

export const Container = styled.article`
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #3e3e3e;
  height: auto;
  padding: 20px;
  width: 700px;

  & + article {
    margin-top: 20px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  margin-right: 10px;
  width: 32px;
`;

export const Content = styled.div`
  font-size: 14px;
`;

export const PostInfo = styled.div`
  display: flex;
  margin-bottom: 20px;

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .author {
    color: #4a4a4a;
    font-size: 14px;
  }

  .date {
    color: #9a9a9a;
    font-size: 11px;
  }
`;

export const Divisor = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 26px 0 20px;
`;

export const Comments = styled.div``;

export const Comment = styled.div`
  display: flex;

  .content {
    background-color: #ededed;
    border-radius: 20px;
    font-size: 13px;
    padding: 15px;
  }

  & + div {
    margin-top: 10px;
  }
`;

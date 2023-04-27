import React, { createContext, useState } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";
import "./styles.css";

export const CommentsContext = createContext(null);

const NestedComments = () => {
  const [comments, setComments] = useState({});

  const handleAddComment = (comment) => {
    if (comment.pid !== "root")
      setComments({
        ...comments,
        [comment.id]: { ...comment },
        [comment.pid]: {
          ...comments[comment.pid],
          children: [...comments[comment.pid].children, comment.id],
        },
      });
    else
      setComments({
        ...comments,
        [comment.id]: { ...comment },
      });
  };

  return (
    <CommentsContext.Provider
      value={{ mainComments: comments, handleAddComment }}
    >
      <AddComment pid="root" />
      <Comments comments={comments} pid="root" />
    </CommentsContext.Provider>
  );
};

export default NestedComments;
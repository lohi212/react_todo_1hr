import React, { useContext } from "react";
import { CommentsContext } from ".";
import AddComment from "./AddComment";
import Comments from "./Comments";

const Comment = ({ comment }) => {
  const { handleDeleteComment } = useContext(CommentsContext);

  return (
    <div className="m-10">
      {comment.text}
      <button onClick={() => handleDeleteComment(comment)}>Delete</button>
      <AddComment pid={comment.id} />
      <Comments pid={comment.id} />
    </div>
  );
};

export default Comment;

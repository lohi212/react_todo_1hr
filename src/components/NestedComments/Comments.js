import React, { useContext } from "react";
import { CommentsContext } from ".";
import Comment from "./Comment";

const Comments = ({ pid }) => {
  const { mainComments } = useContext(CommentsContext);
  const filteredComments = Object.values(mainComments).filter(
    (e) => e.pid === pid
  );
  // .filter()
  return (
    <div className="m-10">
      {filteredComments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;

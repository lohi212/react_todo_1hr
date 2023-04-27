import React from "react";

const Comments = ({ comments, pid }) => {
  const filteredComments = Object.values(comments).filter((e) => e.pid === pid);
  // .filter()
  return (
    <div className="m-10">
      {filteredComments.map((comment) => (
        <div>{JSON.stringify(comment)}</div>
      ))}
    </div>
  );
};

export default Comments;

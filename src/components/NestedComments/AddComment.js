import React, { useContext, useState } from "react";
import { CommentsContext } from ".";

const AddComment = ({ pid }) => {
  const { handleAddComment } = useContext(CommentsContext);
  const [val, setVal] = useState("");

  const handleReply = () => {
    handleAddComment({
      id: Date.now(),
      pid,
      text: val,
      children: [],
    });
    setVal("");
  };

  return (
    <div>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleReply();
        }}
      />
      <button onClick={handleReply}>Reply</button>
      <button>Delete</button>
    </div>
  );
};

export default AddComment;

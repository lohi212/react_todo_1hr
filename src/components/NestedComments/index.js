import React, { createContext, useState } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";
import "./styles.css";

export const CommentsContext = createContext(null);

const NestedComments = () => {
  const [comments, setComments] = useState({});
  // Comments Structure
  // {
  //   id1: {
  //     id: id1,
  //     pid: root,
  //     children: [id3]
  //   },
  //   id2: {
  //     id: id2,
  //     pid: root,
  //     children: []
  //   },
  //   id3: {
  //     id: id3,
  //     pid: id1,
  //     children: []
  //   },
  // }

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

  const handleDeleteComment = (comment = {}) => {
    const deletedIds = [comment.id, ...removeChildren(comment.children)];
    const newComments = { ...comments };
    deletedIds.forEach((id) => {
      delete newComments[id];
    });
    setComments(newComments);
  };

  const removeChildren = (childrenIds = []) => {
    let newChildrenIds = [...childrenIds];
    if (!newChildrenIds.length) return [];

    Object.values(comments).forEach((comment) => {
      if (childrenIds.includes(comment.id))
        newChildrenIds = [
          ...newChildrenIds,
          ...removeChildren(comment.children),
        ];
    });
    return newChildrenIds;
  };

  return (
    <CommentsContext.Provider
      value={{ mainComments: comments, handleAddComment, handleDeleteComment }}
    >
      <AddComment pid="root" />
      <Comments pid="root" />
    </CommentsContext.Provider>
  );
};

export default NestedComments;

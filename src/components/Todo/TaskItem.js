import React, { useContext, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { tasksContext } from ".";

const TaskItem = ({ idx, task, title, tasks }) => {
  const { handleReorder } = useContext(tasksContext);

  const handleDrop = (item) => {
    handleReorder(item, { label: title, idx });
  };

  const [{ canDrop, isOver }, drop] = useDrop(
    useMemo(
      () => ({
        // The type (or types) to accept - strings or symbols
        accept: "TASK",
        // Props to collect
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
        drop: (item, monitor) => {
          handleDrop(item);
        },
      }),
      [[...tasks]]
    )
  );

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "TASK",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: { idx, task, label: title },
  }));

  return (
    <div
      ref={drop}
      role={"Dustbin"}
      className="task-container"
      style={{ backgroundColor: isOver ? "red" : "white" }}
    >
      <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div role="Handle" ref={drag}>
          {" "}
          {idx + 1} {task}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

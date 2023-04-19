import React, { useCallback, useContext, useMemo } from "react";
import { useDrop } from "react-dnd";
import { TasksContext } from ".";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, title }) => {
  const { handleReorder } = useContext(TasksContext);

  const handleDrop = (item) => {
    handleReorder(item, { label: title, idx: 0 });
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

  return (
    <>
      <div
        ref={drop}
        role={"Dustbin"}
        style={{ backgroundColor: isOver ? "red" : "white" }}
      />
      {tasks.map((task, idx) => (
        <TaskItem
          idx={idx}
          key={idx}
          task={task}
          title={title}
          tasks={tasks}
          handleReorder={handleDrop}
        />
      ))}
    </>
  );
};

export default TasksList;

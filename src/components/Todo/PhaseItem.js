import React from "react";
import CreateTask from "./CreateTask";
import TasksList from "./TasksList";

const PhaseItem = ({ tasks, title, handleAddTask }) => {
  const handleTask = (val) => {
    const newPhase = {
      [title]: [...tasks, val],
    };
    handleAddTask(newPhase);
  };

  return (
    <div className="card-container">
      <CreateTask handleTask={handleTask} />
      {/* <button onClick={handleTask}> Add tasks</button> */}
      <h3>{title}</h3>
      <TasksList tasks={tasks} title={title} />
    </div>
  );
};

export default PhaseItem;

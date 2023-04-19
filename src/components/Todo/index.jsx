import React, { createContext, useCallback, useEffect, useState } from "react";
import CreatePhase from "./CreatePhase";
import PhasesList from "./PhasesList";
import "./styles.css";

export const tasksContext = createContext(null);

const Todo = () => {
  const [allTasks, setAllTasks] = useState({
    toDo: ["task 11", "task 12"],
    inProgress: ["task 21"],
  });

  const handlePhaseCreation = (phase) => {
    const newTasks = { ...allTasks };
    newTasks[phase] = [];
    setAllTasks(newTasks);
  };

  const handleAddTask = (task) => {
    const newTasks = { ...allTasks, ...task };
    setAllTasks(newTasks);
  };

  const handleReorder = useCallback(
    (src, dest) => {
      const newTasks = JSON.parse(JSON.stringify(allTasks));
      newTasks[src.label].splice(src.idx, 1);

      newTasks[dest.label].splice(dest.idx, 0, src.task);
      console.log(newTasks[dest.label]);

      setAllTasks(newTasks);
    },
    [allTasks]
  );

  return (
    <div style={{ height: "100%" }}>
      <tasksContext.Provider value={{ handleReorder }}>
        <CreatePhase handlePhase={handlePhaseCreation} />
        <PhasesList phases={allTasks} handleAddTask={handleAddTask} />
      </tasksContext.Provider>
    </div>
  );
};

export default Todo;

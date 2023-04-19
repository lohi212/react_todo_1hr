import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PhaseItem from "./PhaseItem";

const PhasesList = ({ phases, handleAddTask }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="phases-container">
        {Object.keys(phases).map((phase, index) => (
          <PhaseItem
            tasks={phases[phase]}
            title={phase}
            key={index}
            handleAddTask={handleAddTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default PhasesList;

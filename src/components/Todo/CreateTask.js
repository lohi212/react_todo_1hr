import React, { useState } from "react";

const CreateTask = ({ handleTask }) => {
  const [val, setVal] = useState("");

  const handleAddPhase = () => {
    handleTask(val);
    setVal("");
  };

  return (
    <div>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddPhase();
        }}
      />
      <button onClick={handleAddPhase}>Add Task</button>
    </div>
  );
};

export default CreateTask;

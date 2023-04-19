import React, { useState } from "react";

const CreatePhase = ({ handlePhase }) => {
  const [val, setVal] = useState("");

  const handleAddPhase = () => {
    handlePhase(val);
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
      <button onClick={handleAddPhase}>Add Phase</button>
    </div>
  );
};

export default CreatePhase;

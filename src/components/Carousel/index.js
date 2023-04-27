import React from "react";
import Actions from "./ActionButtons";
import { CAROUSEL_ITEMS } from "./utils";

const Carousel = () => {
  return (
    <div>
      <Actions />
      {CAROUSEL_ITEMS.map((ele) => (
        <div
          key={ele.id}
          style={{
            background: ele.bg,
          }}
        >
          {ele.text}
        </div>
      ))}
    </div>
  );
};

export default Carousel;

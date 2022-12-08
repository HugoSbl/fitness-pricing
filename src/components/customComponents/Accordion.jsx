import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // rename en isOpen, setIsOpen
  return (
    <div className="flex justify-center">
      <div
        className="rounded-lg bg-yellow-300 w-4/5 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <img className="h-4 px-4" src="src/assets/arrow.png"></img>
          <div>{title}</div>
          <img className="h-4 px-4" src="src/assets/arrow.png"></img>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;

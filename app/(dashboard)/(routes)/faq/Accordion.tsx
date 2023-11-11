import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`accordion-title p-4 flex justify-between cursor-pointer ${
          isActive
            ? 'bg-gray-500 text-white'
            : 'bg-400 hover:bg-gray-600 hover:text-white hover:bg-opacity-10'
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && (
        <div className="accordion-content bg-gray-400 p-4 text-white">{content}</div>
      )}
    </div>
  );
};

export default Accordion;

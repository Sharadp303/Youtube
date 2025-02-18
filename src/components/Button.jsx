import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-2 py-1 m-2 bg-gray-200 rounded">{name}</button>
    </div>
  );
};

export default Button;

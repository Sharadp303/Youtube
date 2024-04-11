import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Gaming",
  "Songs",
  "Adventure",
  "Live",
  "Cricket",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Movies",
  "Fun",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll">
      {buttons.map((item,index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;

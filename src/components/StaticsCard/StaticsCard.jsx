import React from "react";

const StaticsCard = ({ statics }) => {
//   console.log("statics:", statics);
  return (
    <div>
      statics
      <div>{statics.meanVal}</div>
      <div>{statics.medianVal}</div>
      <div>{statics.modeVal}</div>
      <div>{statics.deviationVal}</div>
    </div>
  );
};

export default StaticsCard;

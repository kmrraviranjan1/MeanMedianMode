import React from "react";

const StaticsCard = ({ dataSet }) => {
//   console.log("dataSet:", dataSet);
  return (
    <div>
      statics
      <div>{dataSet.meanVal}</div>
      <div>{dataSet.medianVal}</div>
      <div>{dataSet.modeVal}</div>
      <div>{dataSet.deviationVal}</div>
    </div>
  );
};

export default StaticsCard;

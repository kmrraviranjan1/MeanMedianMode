import React from "react";
import { Wrapper } from "./StaticsCard.style";
const StaticsCard = ({ statics }) => {
  //   console.log("statics:", statics);
  return (
    <Wrapper>

      <table>
      <caption>Statics</caption>
        <thead>
          <tr>
            <th>Calculation</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            <td>{statics.meanVal}</td>
          </tr>
          <tr>
            <td>Median</td>
            <td>{statics.medianVal}</td>
          </tr>
          <tr>
            <td>StdDev</td>
            <td>{statics.deviationVal}</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{statics.modeVal}</td>
          </tr>
        </tbody>
      </table>
      
    </Wrapper>
  );
};

export default StaticsCard;

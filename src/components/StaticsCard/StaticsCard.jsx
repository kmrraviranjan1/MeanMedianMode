import React from "react";
import { Wrapper,Title,Table,TD,TH } from "./StaticsCard.style";
const StaticsCard = ({ statics }) => {
  //   console.log("statics:", statics);
  return (
    <Wrapper>

      <Title>Statics</Title>
      <Table>
        <thead>
          <tr>
            <TH>Calculation</TH>
            <TH>Value</TH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>Mean</TD>
            <TD>{statics.meanVal}</TD>
          </tr>
          <tr>
            <TD>Median</TD>
            <TD>{statics.medianVal}</TD>
          </tr>
          <tr>
            <TD>StdDev</TD>
            <TD>{statics.deviationVal}</TD>
          </tr>
          <tr>
            <TD>Mode</TD>
            <TD>{statics.modeVal}</TD>
          </tr>
        </tbody>
      </Table>
      
    </Wrapper>
  );
};

export default StaticsCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import StaticsCard from "./StaticsCard/StaticsCard";
import InputForm from "./InputForm/InputForm";
import { mean } from "../helperFunction/mean";
import { median } from "../helperFunction/median";
import {  deviation } from "../helperFunction/deviation";
import { mode } from "../helperFunction/mode";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dataSet, setDataSet] = useState([]);
  const loadData = () => {
    axios
      .get("http://localhost:3001/data")
      .then(({ data }) => {
        // console.log('resp:', data)
        
        const meanVal=mean(data)
        const medianVal=median(data)
        const modeVal=mode(data)
        const standardDeviation=deviation(data)
        // console.log('standardDeviation:', standardDeviation)
        // console.log('modeVal:', modeVal)
        // console.log('medianVal:', medianVal)
        // console.log('meanVal:', meanVal)
        setDataSet({meanVal,medianVal,modeVal,standardDeviation})
      })
};

console.log(dataSet);
  useEffect(() => {
    loadData();
  }, []);
  return loading ? (
    "Loading"
  ) : (
    <div>
      <StaticsCard />
      <InputForm />
    </div>
  );
};

export default Dashboard;

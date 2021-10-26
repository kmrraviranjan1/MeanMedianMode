import React, { useEffect, useState } from "react";
import axios from "axios";
import StaticsCard from "./StaticsCard/StaticsCard";
import InputForm from "./InputForm/InputForm";
import { mean } from "../helperFunction/mean";
import { median } from "../helperFunction/median";
import { deviation } from "../helperFunction/deviation";
import { mode } from "../helperFunction/mode";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dataSet, setDataSet] = useState([]);
  const loadData = () => {
    axios
      .get("http://localhost:3001/data")
      .then(({ data }) => {
        const meanVal = mean(data);
        const medianVal = median(data);
        const modeVal = mode(data);
        const deviationVal = deviation(data);

        setDataSet({ meanVal, medianVal, modeVal, deviationVal });
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
//   console.log(dataSet);
  return loading ? (
    "Loading"
  ) : (
    <div>
      <StaticsCard dataSet={dataSet}/>
      <InputForm />
    </div>
  );
};

export default Dashboard;

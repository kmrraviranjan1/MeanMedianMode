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
  const [statics, setStatics] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const handleNewData = (data) => {
    // console.log("data:", data);
    // console.log("dataSet:", dataSet);
    const payload = [...dataSet, data];
    // console.log("payload:", payload);
    saveData(payload);
  };
  const saveData = (payload) => {
    console.log("payload:", payload);
    axios
      .put("http://localhost:3001/data", { data: payload })
      .then((resp) => {
        console.log("resp:", resp);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  const loadData = () => {
    axios
      .get("http://localhost:3001/data")
      .then(({ data }) => {
        setDataSet(data);
        const meanVal = mean(data);
        const medianVal = median(data);
        const modeVal = mode(data);
        const deviationVal = deviation(data);

        setStatics({ meanVal, medianVal, modeVal, deviationVal });
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  //   console.log(statics);
  return loading ? (
    "Loading"
  ) : (
    <div>
      <StaticsCard statics={statics} />
      <InputForm handleNewData={handleNewData} />
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";

import StaticsCard from "./StaticsCard/StaticsCard";
import InputForm from "./InputForm/InputForm";
import { mean } from "../helperFunction/mean";
import { median } from "../helperFunction/median";
import { deviation } from "../helperFunction/deviation";
import { mode } from "../helperFunction/mode";
import { Wrapper } from "./Dashboard.style";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [statics, setStatics] = useState([]);
  const handleNewData = (datas) => {
    console.log("datas:", datas);
    axios
      .get("https://finserv-static-api.herokuapp.com/datas/1")
      .then(({ data }) => {
        const payload = [...data.mydata, datas];
        console.log("payload:", payload);
        saveData(payload);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const saveData = (payload) => {
    axios
      .put("https://finserv-static-api.herokuapp.com/datas/1", {
        mydata: payload,
      })
      .then((resp) => {
       loadData()
      })
      .catch((err) => {
        console.log("err in save data:", err);
      });
  };

  const loadData = () => {
    axios
      .get("https://finserv-static-api.herokuapp.com/datas/1")
      .then(({ data }) => {
        console.log('data:', data.mydata)
        const meanVal = mean(data.mydata);
        const medianVal = median(data.mydata);
        const modeVal = mode(data.mydata);
        const deviationVal = deviation(data.mydata);

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

  return loading ? (
    "Loading"
  ) : (
    <Wrapper>
      <StaticsCard statics={statics} />
      <InputForm handleNewData={handleNewData} />
    </Wrapper>
  );
};

export default Dashboard;

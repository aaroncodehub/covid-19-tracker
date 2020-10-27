import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
          setData(buildChartData(data, 'cases'));
      });
  }, []);

  const buildChartData = (data, casesType) => {
    const charData = [];
    let lastDataPoint;
    for (let date in data.cases){
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
          };
          charData.push(newDataPoint)
      }
      lastDataPoint = data[casesType][date];
    };
      return charData
    };
    console.log(data)
  return (
    <div>
      {/* <Line /> */}
    </div>
  );
};

export default LineGraph;

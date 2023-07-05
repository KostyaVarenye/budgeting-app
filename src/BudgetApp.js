import React from "react";
import "./BudgetApp.css";
import Barchart from "./components/BarChart";
import SunburstChart from "./components/SunburstChart";
import PieChart from "./components/PieChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import {Data} from "./utils/data"

Chart.register(CategoryScale);

const barChartData = [
  { category: 'Shopping', budget: 300, expenditure: 180 },
  { category: 'Utilities', budget: 100, expenditure: 75 },
  { category: 'Rent', budget: 500, expenditure: 500 },
  { category: 'Savings', budget: 200, expenditure: 200 },
  { category: 'Transportation', budget: 500, expenditure: 175 },
];

const sundialData = {
  "name": "Utilities",
  "children": [
    {
      "name": "Water",
      "value": 100
    },
    {
      "name": "Electricity",
      "value": 200,
      "children": [
        {
          "name": "AC",
          "value": 75
        },
        {
          "name": "Lighting",
          "value": 125
        }
      ]
    },
    {
      "name": "Repairs",
      "value": 50
    }
  ]
}


const BudgetApp = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 0
      }
    ]
  });
  console.log("Budget app data", chartData);

  return (
    <div className="budget-app">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Component displaying frequently bought things */}
          </div>
          <div className="col-lg-4">
            {/* <SunburstChart data={sundialData} height={400} width={400} /> */
            <PieChart chartData={chartData} />
          }
          </div>
          <div className="col-lg-4">
            {/* Component displaying total budget and remaining budget */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" >
            <Barchart data={barChartData} cHeight={400} cWidth={600}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetApp;

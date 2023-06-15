import React from "react";
import "./BudgetApp.css";
import Barchart from "./components/BarChart";

const myData = [
  { category: 'Shopping', budget: 300, expenditure: 180 },
  { category: 'Utilities', budget: 100, expenditure: 75 },
  { category: 'Rent', budget: 500, expenditure: 500 },
  { category: 'Savings', budget: 200, expenditure: 200 },
  { category: 'Transportation', budget: 500, expenditure: 175 },
];

const BudgetApp = () => {
  return (
    <div className="budget-app">
      <nav className="navbar">{/* Navigation bar content */}</nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1>First</h1>
            {/* Component displaying frequently bought things */}
          </div>
          <div className="col-lg-4">
            <h1>Second</h1>
            {/* Component displaying most spent on list */}
          </div>
          <div className="col-lg-4">
            <h1>Third</h1>
            {/* Component displaying total budget and remaining budget */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Graph</h1>
            <Barchart data={myData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetApp;

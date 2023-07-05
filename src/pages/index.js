import React from "react";
import BudgetApp from "../BudgetApp";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center",
        height: "100vh",
      }}
    >
      <BudgetApp />
    </div>
  );
};

export default Home;

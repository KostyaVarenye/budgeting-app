import logo from "./logo.svg";
import "./App.css";
import React from "react";
import BudgetApp from "./BudgetApp";
import "./BudgetApp.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import AnnualReport from "./pages/annual";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/annual" component={AnnualReport} />
            <Route path="/sign-up" component={SignUp} />
          </Routes>
        </Router>
        <BudgetApp />
      </header>
    </div>
  );
}

export default App;

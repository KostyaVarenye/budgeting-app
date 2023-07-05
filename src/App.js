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

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/annual" element={ <AnnualReport /> } />
            <Route path="/sign-up" element={ <SignUp /> } />
            <Route path="/budget" element={ <BudgetApp /> } /> {/* Add this line */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddUpdateEmployeeComponent from "./components/AddUpdateEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/add-employee"
              element={<AddUpdateEmployeeComponent />}
            />
            <Route
              path="/edit-employee/:id"
              element={<AddUpdateEmployeeComponent />}
            />
          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}
export default App;

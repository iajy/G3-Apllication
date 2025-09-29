import React from "react";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen items-center justify-end">
              <Login />
            </div>
          }
        />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default App;

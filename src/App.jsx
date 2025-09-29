import React from "react";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import { Route, Router, Routes } from "react-router-dom";
import EditUser from "./Components/EditUser";

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
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </>
  );
};

export default App;

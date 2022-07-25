import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { UserAuth } from "../context/AuthContext";

import "./Dashboard.css";

const Dashboard = () => {
  const activeMenu = true;
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out!");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
        )}
      </div>

      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          Navbar
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/dashboard" Element="dashboard"></Route>
          <Route path="/land" Element="land"></Route>
          <Route path="/residential" Element="residential"></Route>
          <Route path="/commercial" Element="residential"></Route>
        </Routes>
      </div>

      {/* <div className="flex">
        <div className="max-w-[600px] mx-auto my-16 p-4">
          <h1 className="text-2xl font-bold py-4">Account</h1>
          <p>User Email: {user && user.email}</p>
          <button onClick={handleLogout} className="border px-6 py-2 my-4">
            Logout
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../context/ContextProvider";



import Dashboard from "./Dashboard";
import Residential from "./Residential";
import Commercial from "./Commercial";

const Land = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed" style={{ zIndex: '100000' }}>
        {activeMenu ? (
          <div className="w-1/5 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
      </div>

      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
      </div>
      

      <div>
        <Routes>
          <Route path="/dashboard" Element={<Dashboard/>}></Route>
          <Route path="/land" Element={<Land />}></Route>
          <Route path="/residential" Element={<Residential/>}></Route>
          <Route path="/commercial" Element={<Commercial/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Land;

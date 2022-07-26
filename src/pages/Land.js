import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../context/ContextProvider";


const Land = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed" style={{ zIndex: '100000' }}>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
        }>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio temporibus vel. Praesentium, fugit! Repellat sint nam quod deleniti ab culpa quis consequuntur distinctio eum dolorem? In aspernatur aut natus.</p>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Land;
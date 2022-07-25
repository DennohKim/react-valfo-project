import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FcBiotech } from "react-icons/fc";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/links";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

 
  const  activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"

  return (
    <div className="bg-indigo-500 h-screen md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FcBiotech /> <span>Chizaa</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((mainLink) => (
              <div key={mainLink.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{mainLink.title}</p>
                {mainLink.links.map((navLink) => (
                <NavLink to={`/${navLink.name}`} key={navLink.name} onClick={handleCloseSideBar}className={({isActive}) => isActive ? activeLink : normalLink }>
                  {navLink.icon}
                  <span className="capitalize">{navLink.name}</span>
                </NavLink>
              ))}
              </div>
            
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
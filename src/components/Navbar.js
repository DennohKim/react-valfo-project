import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

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
    <div className="flex justify-between">
      <div className="flex justify-between p-2 md:mx-6 relative">
        {
          <NavButton
            title="Menu"
            customFunc={() =>
              setActiveMenu((activeMenu) => !activeMenu)
            }
            color="blue"
            icon={<AiOutlineMenu />}
          />
        }
      </div>

      <div className="flex p-4">
        <div className="pr-6">
          <p className="text-base font-bold py-2">Account</p>
          <p className="text-base ">User Email: {user && user.email}</p>
        </div>

        <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

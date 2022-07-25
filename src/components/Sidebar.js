import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import { FcBiotech } from "react-icons/fc";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from "../data/links"
import { MdOutlineCancel } from 'react-icons/md';



const Sidebar = () => {

  const activeMenu = true;

  return (
    <div className='bg-indigo-500 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
    { activeMenu && (<>
      <div className="flex justify-between items-center">
        <Link to="/" onClick={() => {}} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <FcBiotech /> <span>Chizaa</span>

        </Link>
        <TooltipComponent  content="Tooltip Content" >
          <button>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
    </>) }
   </div>
  )
}

export default Sidebar
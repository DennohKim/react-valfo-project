import {BiLandscape} from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Dashboard',
          icon: <MdOutlineDashboard />,
        },
      ],
    },
  
    {
      title: 'Properties',
      links: [
        {
          name: 'land',
          icon: <BiLandscape  />,
        },
        {
          name: 'residential',
          icon: <BiHome />,
        },
        {
          name: 'commercial',
          icon: <TbBuildingStore/>,
        },
      ],
    },
]
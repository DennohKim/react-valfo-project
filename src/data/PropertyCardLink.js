import {BiLandscape} from "react-icons/bi";
import { GrHomeRounded} from "react-icons/gr";
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
      title: 'Pages',
      links: [
        {
          name: 'land',
          icon: <BiLandscape  />,
        },
        {
          name: 'residential',
          icon: <GrHomeRounded />,
        },
        {
          name: 'commercial',
          icon: <TbBuildingStore/>,
        },
      ],
    },
]
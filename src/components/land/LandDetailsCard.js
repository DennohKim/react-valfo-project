import React from 'react';
import { Link } from "react-router-dom"
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const LandDetailsCard = ({ landDetail }) => {

  const { description, value, reference, size, date, details } = landDetail

  return (
    <>

    <div className='flex flex-col bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4'> 
    <div className="flex justify-between">
    <h1 >{description}</h1>
    <h2 >{date}</h2>
     <Link className="fill-slate-300 cursor-pointer" to="/land">
     </Link>
  </div>
  <div className="flex justify-between pt-4 mb-4" >
    <p >LR No: <br/><span className="font-bold">{reference}</span> </p>
    <p >Size: <br/><span className="font-bold">{size}</span></p>
    <p >Value:  <br/><span className="font-bold">{value}</span></p>
    <p ><span className="font-bold">{details}</span></p>
  </div>
  </div>

    </>
    
  )
}

export default LandDetailsCard
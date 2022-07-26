import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const LandDetailsCard = () => {
  return (
    <div> 
    <div id="land-title-container" className="flex justify-between">
    <h1 id="land-description">description</h1>
    <h2 id="land-value-date">date</h2>
     <a id="delete-btn" className="fill-slate-300 cursor-pointer" href="../pages/Land.js"><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
  </div>
  <div id="land-details-container" class="flex justify-between pt-4 mb-4" >
    <p >LR No: <br/><span id="land-reference" class="font-bold">reference</span> </p>
    <p >Size: <br/><span id="land-size" class="font-bold"> size Ac</span></p>
    <p >Value:  <br/><span id="land-value" class="font-bold">value</span></p>
  </div>
  </div>
  )
}

export default LandDetailsCard
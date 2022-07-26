import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommercialDetailsCard = () => {
  return (
    <div>
        <div id="residential-title-container" className="flex justify-between">
        <h1 id="residential-description">description</h1>
        <h2 id="residential-value-date">date</h2>
        <a id="delete-btn" className="fill-slate-300 cursor-pointer" href="../pages/Commercial.js"><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
      </div>
      <div id="commercial-details" className="flex justify-between pt-4 property-detail">
        <p >Property Name:  <br/> <span id="commercial-value" className="font-bold">name</span></p>
        <p >LR No: <br/><span  id="commercial-reference"  className="font-bold">reference</span> </p>
        <p >Floor area: <br/><span id="floor-area-commercial" className="font-bold">area</span></p>
      </div>
      <div className="flex justify-between pt-4 property-detail">
        <p >Rent: <br/><span id="commercial-rent" className="font-bold">rent</span> </p>
        <p >Service Charge: <br/><span id="service-charge" class="font-bold">service</span></p>
        <p >Value: <br/><span class="font-bold"> value</span></p>
      </div>
    </div>
  )
}

export default CommercialDetailsCard
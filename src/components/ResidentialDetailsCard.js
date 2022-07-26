import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResidentialDetailsCard = () => {
  return (
    <div>
      <div id="residential-title-container" className="flex justify-between">
        <h1 id="residential-description">description</h1>
        <h2 id="residential-value-date">date</h2>
        <a
          id="delete-btn"
          className="fill-slate-300 cursor-pointer"
          href="../pages/Residential.js"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </a>
      </div>
      <div
        id="residential-details"
        className="flex justify-between pt-4 property-detail"
      >
        <p className="">
          LR No: <br />
          <span id="residential-reference" className="font-bold">
            reference
          </span>{" "}
        </p>
        <p>
          Floor area: <br />
          <span id="floor-area" className="font-bold">
            area
          </span>
        </p>
        <p>
          Value: <br />
          <span id="residential-value" className="font-bold">
            value
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResidentialDetailsCard;

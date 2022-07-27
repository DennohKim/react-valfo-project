import React from "react";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";

const ResidentialDetailsCard = ({residentialDetail, onHandleDeleteResidential}) => {

  const{ residentialUrl } = useStateContext();

  const { id,description, value, reference, area, date, rent } = residentialDetail;

  function handleDelete(){
    fetch(`${residentialUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onHandleDeleteResidential(id)
  )}

  return (
    <div className="flex flex-col bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4">
      <div className="flex justify-between">
        <h1 id="residential-description">{description}</h1>
        <h2 id="residential-value-date">{date}</h2>
       <MdDelete onClick={handleDelete}/>
      </div>
      <div className="flex justify-between pt-4 property-detail">
        <p className="">
          LR No: <br />
          <span className="font-bold">
            {reference}
          </span>
        </p>
        <p>
          Floor area: <br />
          <span className="font-bold">
            {area}
          </span>
        </p>
        <p>
          Value: <br />
          <span className="font-bold">
            {value}
          </span>
        </p>
      </div>
      <div className="flex justify-between pt-4 property-detail">
        <p>
          Rent: <br />
          <span className="font-bold">
            {rent}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResidentialDetailsCard;

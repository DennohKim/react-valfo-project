import React from "react";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";

const ResidentialDetailsCard = ({residentialDetail, onHandleDeleteResidential}) => {

  const{ residentialUrl } = useStateContext();

  const { id,description, value, reference, area, date, rent, location } = residentialDetail;

  function handleDelete(){
    fetch(`${residentialUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onHandleDeleteResidential(id)
  )}

  return (
    <div className="flex flex-col bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4">
      <div className="flex justify-between pt-2 mb-4 border-b-2 border-gray-200 pb-2">
        <p>{description}</p>
        <p>{date}</p>
       <MdDelete onClick={handleDelete} className="fill-slate-400 hover:fill-slate-800 cursor-pointer"/>
      </div>
      <div className="flex justify-between pt-2 mb-4 border-b-2 border-gray-200 pb-2">
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
      <div className="flex justify-between pt-2 mb-4 border-b-2 border-gray-200 pb-2">
        <p>
          Rent: <br />
          <span className="font-bold">
            {rent}
          </span>
        </p>
        <p>
          Location: <br />
          <span className="font-bold">
            {location}
          </span>
        </p>
        <p>
        
        </p>
      </div>
    </div>
  );
};

export default ResidentialDetailsCard;

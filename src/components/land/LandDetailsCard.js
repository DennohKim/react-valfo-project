import React from "react";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";

const LandDetailsCard = ({ landDetail, onHandleDeleteLand }) => {

  const{ landUrl } = useStateContext();
  const { id,description, value, reference, size, date, details } = landDetail;

  function handleDelete(){
    fetch(`${landUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onHandleDeleteLand(id)
  )}

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4">
        <div className="flex justify-between pt-4 mb-4">
          <p>{description}</p>
          <p>{date}</p>
          <MdDelete onClick={handleDelete} className="fill-slate-400 hover:fill-slate-800 cursor-pointer" />
        </div>
        <div className="flex justify-between pt-4 mb-4">
          <p>
            LR No: <br />
            <span className="font-bold">{reference}</span>{" "}
          </p>
          <p>
            Size: <br />
            <span className="font-bold">{size}</span>
          </p>
          <p>
            Value: <br />
            <span className="font-bold">{value}</span>
          </p>
          {/* <p>
            <span className="font-bold">{details}</span>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default LandDetailsCard;

import React from "react";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";

const CommercialDetailsCard = ({
  commercialDetail,
  onHandleDeleteCommercial,
}) => {
  const { commercialUrl } = useStateContext();

  const { id, description, name, value, reference, area, date, rent, service } =
    commercialDetail;

  function handleDelete() {
    fetch(`${commercialUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onHandleDeleteCommercial(id));
  }

  return (
    <div className="flex flex-col bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4">
      <div className="flex justify-between">
        <h1>{description}</h1>
        <h2>{date}</h2>
        <MdDelete onClick={handleDelete} className="fill-slate-400 hover:fill-slate-800 cursor-pointer" />
      </div>
      <div className="flex justify-between pt-4 property-detail">
        <p>
          Property Name: <br /> <span className="font-bold">{name}</span>
        </p>
        <p>
          LR No: <br />
          <span className="font-bold">{reference}</span>
        </p>
        <p>
          Floor area: <br />
          <span className="font-bold">{area}</span>
        </p>
      </div>
      <div className="flex justify-between pt-4 property-detail">
        <p>
          Rent: <br />
          <span id="commercial-rent" className="font-bold">
            {rent}
          </span>
        </p>
        <p>
          Service Charge: <br />
          <span id="service-charge" class="font-bold">
            {service}
          </span>
        </p>
        <p>
          Value: <br />
          <span class="font-bold"> {value}</span>
        </p>
      </div>
    </div>
  );
};

export default CommercialDetailsCard;

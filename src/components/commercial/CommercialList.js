import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import CommercialDetailsCard from "./CommercialDetailsCard";
import CommercialForm from "./CommercialForm";

const CommercialList = () => {
  const { commercial, setCommercial, search, setSearch } = useStateContext();

  function handleAddCommercial(newCommercial) {
    setCommercial([...commercial, newCommercial]);
  }

  function handleDeleteCommercial(deleteCommercial) {
    const updateCommercial = commercial.filter((commercialComparable) => {
      return commercialComparable.id !== deleteCommercial;
    });
    setCommercial(updateCommercial);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  const commercialListToDisplay = commercial.filter((commercialComparable) => commercialComparable.location.toLowerCase().includes(search.toLowerCase()));


  const commercialList = commercialListToDisplay.map((commercialDetail) => {
    return (
      <CommercialDetailsCard
        key={commercialDetail.id}
        commercialDetail={commercialDetail}
        onHandleDeleteCommercial={handleDeleteCommercial}
      />
    );
  });

  return (
    <div className="w-11/12 mx-auto my-0">
      <div className="text-lg font-bold mb-6">Commercial Comparables</div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <CommercialForm onAddCommercial={handleAddCommercial} />
        </div>
        <div>
        <input className="w-full border-2 border-gray-300 pl-3 py-2 mb-2 rounded-md" type="text" name="search" placeholder="Search by location ..." value={search} onChange={handleSearchChange}  />
        {commercialList}</div>
      </div>
    </div>
  );
};

export default CommercialList;

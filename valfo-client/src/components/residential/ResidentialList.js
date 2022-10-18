import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import ResidentialDetailsCard from "./ResidentialDetailsCard";
import ResidentialForm from "./ResidentialForm";

const ResidentialList = () => {
  const { residential, setResidential, search, setSearch } = useStateContext();

  function handleAddResidential(newResidential) {
    setResidential([...residential, newResidential]);
  }

  function handleDeleteResidential(deleteResidential) {
    const updateResidential = residential.filter((residentialComparable) => {
      return residentialComparable.id !== deleteResidential;
    });
    setResidential(updateResidential);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  const residentialListToDisplay = residential.filter((residentialComparable) => residentialComparable.location.toLowerCase().includes(search.toLowerCase()));

  const residentialList = residentialListToDisplay.map((residentialDetail) => {
    return (
      <ResidentialDetailsCard
        key={residentialDetail.id}
        residentialDetail={residentialDetail}
        onHandleDeleteResidential={handleDeleteResidential}
      />
    );
  });

  return (
    <div className="w-11/12 mx-auto my-0">
      <div className="text-lg font-bold mb-6">Residential Comparables</div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <ResidentialForm onAddResidential={handleAddResidential} />
        </div>
        <div>
        <input className="w-full border-2 border-gray-300 pl-3 py-2 mb-2 rounded-md" type="text" name="search" placeholder="Search by location ..." value={search} onChange={handleSearchChange}  />
        {residentialList}</div>
      </div>
    </div>
  );
};

export default ResidentialList;

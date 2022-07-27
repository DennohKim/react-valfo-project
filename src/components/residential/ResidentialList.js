import React from 'react';
import { useStateContext } from "../../context/ContextProvider";
import ResidentialDetailsCard from './ResidentialDetailsCard';
import ResidentialForm from './ResidentialForm';

const ResidentialList = () => {

const { residential, setResidential } = useStateContext();

function handleAddResidential(newResidential){
  setResidential([...residential, newResidential]); 
}

function handleDeleteResidential(deleteResidential){
  const updateResidential = residential.filter((residentialComparable) => {
    return residentialComparable.id !== deleteResidential
  })
  setResidential(updateResidential)
}

const residentialList = residential.map((residentialDetail) => {
    return (
        <ResidentialDetailsCard key={residentialDetail.id} residentialDetail={residentialDetail} onHandleDeleteResidential={handleDeleteResidential}/>
    )

})

  return (
    <div className='w-11/12 mx-auto my-0'>
        <h2 className="text-lg font-bold mb-6">Residential Comparables</h2>
        <div className="grid grid-cols-2 gap-10">
        <div><ResidentialForm onAddResidential={handleAddResidential}/></div>
        <div>{residentialList}</div>

        </div>
    </div>
  )
}

export default ResidentialList
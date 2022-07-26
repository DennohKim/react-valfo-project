import React from 'react';
import { useStateContext } from "../../context/ContextProvider";
import LandDetailsCard from './LandDetailsCard';
import LandForm from './LandForm';

const LandList = () => {

const { land, setLand } = useStateContext();

function handleAddLand(newLand){
  setLand([...land, newLand]); 
}

function handleDeleteLand(deleteLand){
  const updateLand = land.filter((landComparable) => {
    return landComparable.id !== deleteLand
  })
  setLand(updateLand)
}

const landList = land.map((landDetail) => {
    return (
        <LandDetailsCard key={landDetail.id} landDetail={landDetail} onHandleDeleteLand={handleDeleteLand}/>
    )

})

  return (
    <div className='w-11/12 mx-auto my-0'>
        <h2 className="text-lg font-bold mb-6">Land Comparables</h2>
        <div className="grid grid-cols-2 gap-10">
        <div><LandForm onAddLand={handleAddLand}/></div>
        <div>{landList}</div>

        </div>
    </div>
  )
}

export default LandList
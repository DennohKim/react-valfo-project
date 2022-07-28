import React from 'react';
import { useStateContext } from "../../context/ContextProvider";
import LandDetailsCard from './LandDetailsCard';
import LandForm from './LandForm';

const LandList = () => {

const { land, setLand, search, setSearch } = useStateContext();

function handleAddLand(newLand){
  setLand([...land, newLand]); 
}

function handleDeleteLand(deleteLand){
  const updateLand = land.filter((landComparable) => {
    return landComparable.id !== deleteLand
  })
  setLand(updateLand)
}

function handleSearchChange(event){
  setSearch(event.target.value)
}

const landListToDisplay = land.filter((landComparable) => landComparable.location.toLowerCase().includes(search.toLowerCase()));


const landList = landListToDisplay.map((landDetail) => {
    return (
        <LandDetailsCard key={landDetail.id} landDetail={landDetail} onHandleDeleteLand={handleDeleteLand}/>
    )

})

  return (
    <div className='w-11/12 mx-auto my-0'>
        <div className="text-lg font-bold mb-6">Land Comparables</div>
        <div className="grid grid-cols-2 gap-10">
        <div><LandForm onAddLand={handleAddLand}/></div>
        <div>
        <input className="w-full border-2 border-gray-300 pl-3 py-2 mb-2 rounded-md" type="text" name="search" placeholder="Search by location ..." value={search} onChange={handleSearchChange}  />
        {landList}
        </div>

        </div>
    </div>
  )
}

export default LandList
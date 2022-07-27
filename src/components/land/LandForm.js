import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';


const LandForm = ({ onAddLand }) => {

  const{ landUrl } = useStateContext();

  const [formData, setFormData ] = useState({
    description: "",
    reference: "",
    value:"",
    size:"",
    location:"",
    date:"",
    

  });

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value,})
  }

  function handleSubmit(event){
    event.preventDefault();

    const addLandForm = { description: formData.description,
    reference: formData.reference,
    value: formData.value,
    size: formData.size,
    location: formData.location,
    date: formData.date,
    details:formData.details,}

    fetch(landUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addLandForm)

    })
    .then(response => response.json())
    .then(newLandComparable => {
      onAddLand(newLandComparable)
      setFormData({...formData,  description: "", reference: "", value:"", size:"", location:"",date:"" })
    })
  }


  return (
    <div>
        <form onSubmit= {handleSubmit} className="flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Land">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" value={formData.description} onChange={handleChange} type="text" placeholder="Description"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Land Reference">
                      Land Reference No.
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="reference" value={formData.reference} onChange={handleChange} type="text" placeholder="123/45"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                      Value
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="value" value={formData.value} onChange={handleChange}  type="text" placeholder="Kshs"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Size
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="size" value={formData.size} onChange={handleChange} type="number" placeholder="Acres"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Land">
                      Location
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="location" value={formData.location} onChange={handleChange}  type="text" placeholder="Location"/>
                  </div>
                
                  <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Date of valuation
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" value={formData.date} onChange={handleChange}  placeholder="" type="date"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Land">
                      Details
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="details" value={formData.details} onChange={handleChange}  type="text" placeholder="Property details"/>
                  </div>
                
                </div>
                <div className="flex items-center justify-between">
                  <input className="bg-[#E62953] hover:bg-[#FF2354] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  cursor-pointer" id="submit" value="Add Comparable" type="submit"/>
                </div>
              </form>
    </div>
  )
}

export default LandForm
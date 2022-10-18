import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';

const CommercialForm = ({onAddCommercial}) => {

  const{ commercialUrl } = useStateContext();


  const [formData, setFormData ] = useState({
    description: "",
    name: "",
    reference: "",
    value:"",
    area:"",
    service:"",
    location:"",
    date:"",
    rent:"",

  });

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value,})
  }

  function handleSubmit(event){
    event.preventDefault();

    const addCommercialForm = { description: formData.description,
    reference: formData.reference,
    value: formData.value,
    area: formData.area,
    service: formData.service,
    location: formData.location,
    date: formData.date,
    rent:formData.rent,}

    fetch(commercialUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addCommercialForm)

    })
    .then(response => response.json())
    .then(newCommercialComparable => {
      onAddCommercial(newCommercialComparable)
      setFormData({...formData, description: "", name: "", reference: "", value:"", area:"", service:"", location:"",
      date:"", rent:"" })
    })
  }


  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Commercial">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.description} onChange={handleChange} name="description"  type="text" placeholder="Office Space"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Property Name">
                      Property name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.name} onChange={handleChange} name="name"  type="text" placeholder="Times Tower"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date of valuation">
                      Date of valuation
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.date} onChange={handleChange} name="date"  type="date"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Commercial Reference">
                      LR No.
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.reference} onChange={handleChange} name="reference"  type="text" placeholder="123/45"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                      Value
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.value} onChange={handleChange} name="value"  type="number" placeholder="Kshs"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Floor Area">
                      Floor area
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.area} onChange={handleChange} name="area"  type="number" placeholder="Sqft"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Service Charge">
                      Service Charge
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.service} onChange={handleChange} name="service"  type="number" placeholder="Per sqft"/>
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Rent">
                      Rent
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.rent} onChange={handleChange} name="rent"  placeholder="Kshs" type="number"/>
                  </div>
                  
                </div>
            
                <div className="flex items-center justify-between">
                  <input className="bg-[#E62953] hover:bg-[#FF2354] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="submit" value="Add Comparable" type="submit"/>
                </div>
              </form>

    </div>
  )
}

export default CommercialForm
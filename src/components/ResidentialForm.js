import React from 'react'

const ResidentialForm = () => {
  return (
    <div>
         <form id = "residential-form" className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Residential">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_input_description" type="text" placeholder="Townhouse"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Land Reference">
                      Land Reference No.
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_input_reference" type="text" placeholder="123/45"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                      Value
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_input_value" type="number" placeholder="Kshs"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Floor Area">
                      Floor area
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_input_area" type="number" placeholder="Per sqft"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Rent
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_input_rent" type="number" placeholder="Kshs"/>
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Date of valuation
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="residential_valuation_date" placeholder="" type="date"/>
                  </div>
                </div>
        
                  <div className="flex items-center justify-between">
                    <input className="bg-[#E62953] hover:bg-[#FF2354] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="submit" value="Add Comparable" type="submit"/>
                  </div>
              
              </form>

    </div>
  )
}

export default ResidentialForm
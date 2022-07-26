import React from 'react'

const CommercialForm = () => {
  return (
    <div>
        <form id="commercial-form" className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex gap-x-8">
                  <div className="mb-4 ">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="Commercial">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_description" type="text" placeholder="Office Space"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Property Name">
                      Property name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_name" type="text" placeholder="Times Tower"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date of valuation">
                      Date of valuation
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_valuation_date" type="date"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Commercial Reference">
                      LR No.
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_reference" type="text" placeholder="123/45"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                      Value
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_value" type="number" placeholder="Kshs"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Floor Area">
                      Floor area
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_area" type="number" placeholder="Sqft"/>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Service Charge">
                      Service Charge
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service-charge" type="number" placeholder="Per sqft"/>
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Rent">
                      Rent
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="commercial_input_rent" placeholder="Kshs" type="number"/>
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
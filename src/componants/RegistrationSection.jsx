import React, { useState } from 'react'
const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const RegistrationSection = () => {
  const [registrationUpdate, setRegistrationUpdate] = useState("Submit your details");

  return (
    <div className='w-full'>
        <div className='px-2 py-2 bg-button1-color rounded-lg border'>
            <h2 className='text-1xl sm:text-3xl lg:text-4xl mb-2'>Registration</h2>
            
            <div className='space-y-4'>
              <input type="text" placeholder='Name' className={inputStyle} />
              <input type="number" placeholder='Age' className={inputStyle} />
              <input type="text" placeholder='Public address/id' className={inputStyle} />
              <div className='flex justify-start items-center space-x-3'>
                <button className='px-3 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>Submit</button>
                <p>{registrationUpdate}</p>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default RegistrationSection
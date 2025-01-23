import React, { useState } from 'react'
const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const BecomeCandidate = () => {
    const [becomeCandidateUpdate, setBecomeCandidateUpdate] = useState("Request to become a candidate");

  return (
    <div className='space-y-4'>
        <div className='p-2 space-y-4 bg-button1-color rounded-lg border'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Become a Candidate</h1>
            <div className='flex justify-start items-center space-x-3'>
                <button className='px-3 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>Send request</button>
                <p>{becomeCandidateUpdate}</p>
            </div>
        </div>
    </div>
  )
}

export default BecomeCandidate
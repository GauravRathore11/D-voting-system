import React, { useState } from 'react'

const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const VotingSection = () => {

  const [voteUpdate, setVoteUpdate] = useState("Vote for this candidate");

  return (
    <div className='w-full'>
      <div className='space-y-2 p-2 bg-gradient-to-r from-nav1-color via-nav2-color to-button1-color rounded-lg'>
        <h1 className='text-1xl sm:text-2xl lg:text-3xl '>
          <span className='text-button1-color'>
            Vote for a Candidate {" "}
          </span>
          using their public address
        </h1>

        <input type="text" placeholder='public id/address of candidate' className={inputStyle} />
        
        <div className='flex justify-start items-center space-x-3'>
            <button className='px-4 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>Vote</button>
            <p>{voteUpdate}</p>
        </div>

      </div>
    </div>
  )
}

export default VotingSection
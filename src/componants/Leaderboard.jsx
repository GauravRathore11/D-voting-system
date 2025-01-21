import React from 'react'
import { Candidates } from '../constants/util'

const Leaderboard = () => {
  return (
    <div className='bg-gradient-to-r from-teal-400 to-lime-500 w-full rounded-lg p-2'>
        <h1 className='text-2xl sm:block sm:text-4xl lg:text-5xl mb-2'>Leaderboard</h1>
        <div className='bg-button1-color rounded-lg p-2 mb-2 flex justify-between text-lg text-red-400'>
            <h1>Candidate</h1>
            <h1>Votes</h1>
        </div>


        <ul>
            {Candidates.map((candidate, index) => (
                <div key={index} className='bg-button1-color rounded-lg p-2 mb-2'>
                    <div className='flex justify-between'>
                        <h1>{candidate.name}(Age : {candidate.age})</h1>
                        <h1>{candidate.votes}</h1>
                    </div>
                    <h5 className='text-neutral-500 text-sm'>{candidate.address}</h5>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Leaderboard
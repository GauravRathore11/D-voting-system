import React from 'react'
import voting from '../assets/voting.png'
import { userInstructions } from '../constants/util'

const Instructions = () => {
  return (
    <div className='p-3 text-button1-color'>
        <div className='bg-para-color w-full sm:block sm:w-1/2 lg:w-1/2 rounded-lg text-md sm:text-3xl lg:text-4xl p-3'>

              <h1>Instructions</h1>
              
              <ul className='text-sm list-disc ml-2'>
                {userInstructions.map((item, index) => (
                  <li key={index}>
                    {item.instruction}
                  </li>
                ))}
              </ul>

        </div>

        <div className='hidden sm:block sm:w-1/2 lg:w-1/2'>
            <img src={voting} alt="voting Image" className='w-40 h-40 rounded-lg' />
        </div>

    </div>
  )
}

export default Instructions
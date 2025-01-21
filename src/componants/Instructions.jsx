import React from 'react'
import voting from '../assets/voting.png'
import { userInstructions } from '../constants/util'

const Instructions = () => {
  return (
    <div className='text-button1-color bg-para-color w-full  rounded-lg text-md sm:text-3xl lg:text-4xl p-3 mb-2'>

      <h1>Instructions</h1>
      
      <ul className='text-sm list-disc ml-2'>
        {userInstructions.map((item, index) => (
          <li key={index}>
            {item.instruction}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Instructions
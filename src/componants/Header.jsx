import React from 'react'

const Header = () => {
  return (
    <div className='p-2'>
      <div className='rounded-lg top-0 w-full bg-gradient-to-r from-button1-color to-nav1-color py-4 px-4'>
        
        <div className='flex justify-between'>
          <span className='text-semibold text-1xl sm:text-4xl lg:text-5xl'>
             <span className='text-semibold text-1xl sm:text-4xl lg:text-5xl bg-nav2-color text-transparent bg-clip-text'>Decentralized {" "}</span>
             Voting System</span>
          <a href="#" className='py-2 px-3 bg-button1-color rounded-lg shadow-lg text-sm sm:text-1/2xl lg:text-2xl hover:text-green-500'>Connect Wallet</a>
        </div>

        <div className='p-1'>
          <p className='text-para-color'>Welcome to our Decentralized Voting System, where democracy meets blockchain technology!<br /> This innovative platform ensures secure, transparent, and tamper-proof elections by leveraging the power of decentralization. With an intuitive interface and a robust underlying system, we aim to revolutionize the way elections are conducted.</p>
        </div>

      </div>

    </div>
  )
}

export default Header
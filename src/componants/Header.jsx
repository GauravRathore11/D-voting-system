import React, { useState } from 'react'
import { Description } from '../constants/util';
import { useContext } from 'react';
import { WalletContext } from '../constants/walletContext';

const Header = () => {

  const { connectWallet, userAddress } = useContext(WalletContext);


  return (
    <div className='p-2'>
      <div className='rounded-lg top-0 w-full bg-gradient-to-r from-button1-color to-nav1-color py-4 px-4'>
        
        <div className='space-y-3 flex flex-wrap justify-between items-center'>
          <span className='text-semibold text-1xl sm:text-4xl lg:text-5xl w-full lg:w-2/3'>
             <span className='text-semibold text-[32px] sm:text-4xl lg:text-5xl bg-nav2-color text-transparent bg-clip-text'>Decentralized {" "}</span>
             Voting System</span>
          
          <div className='w-full lg:w-1/3 flex justify-start lg:justify-end'>
            {userAddress ? (
              <p className='bg-white py-1 px-2 rounded-lg text-[10px] sm:text-sm lgext-sm text-neutral-600 w-fit'>Connected Address : {userAddress}</p>
            ) : (
               <button onClick={connectWallet} className='h-fit py-2 px-3 bg-button1-color rounded-lg shadow-lg text-sm hover:bg-green-900'>Connect Wallet</button>
             )
            }
          </div>

        </div>

        <div className='p-1'>
          <p className='text-para-color text-sm'>{Description}</p>
        </div>

      </div>

    </div>
  )
}

export default Header
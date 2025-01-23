import React, { useState } from 'react'
import { useContext } from 'react';
import { WalletContext } from '../constants/walletContext';
import { createContractInstance } from '../constants/contracts';
const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const RegistrationSection = () => {
  const [registrationUpdate, setRegistrationUpdate] = useState("Submit your details");
  const { web3 , userAddress } = useContext(WalletContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const registrationButtonClick = async (name, age) => {
    try{

        if(!name || !age) {
          setRegistrationUpdate("Please enter both the values");
          return;
        }

        if(age<18){
          setRegistrationUpdate("You are underage");
          return;
        }

        const contract = createContractInstance(web3);
        const receipt =  await contract.methods.personRegistration(name, age).send({ from : userAddress });
        
        const event = receipt.events.registrationStatus;

        if(event){
          setRegistrationUpdate("You are successfully registered");
        }
        else{
          setRegistrationUpdate("Registration success, but no event emitted");
        }
      }catch(error) {
        setRegistrationUpdate(error.message);
      }
    }

  return (
    <div className='w-full'>
        <div className='px-2 py-2 bg-button1-color rounded-lg border'>
            <h2 className='text-1xl sm:text-3xl lg:text-4xl mb-2'>Registration</h2>
            
            <div className='space-y-4'>
              <input type="text" placeholder='Name' className={inputStyle} value={name} onChange={(e) => setName(e.target.value)}/>
              <input type="number" placeholder='Age' className={inputStyle} value={age} onChange={(e) => setAge(e.target.value)}/>

              <div className='flex justify-start items-center space-x-3'>
                <button onClick={() => registrationButtonClick(name, age)} className='px-3 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>
                  submit
                </button>
                <p>{registrationUpdate}</p>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default RegistrationSection
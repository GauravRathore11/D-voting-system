import React, { useContext, useEffect, useState } from 'react'
import { WalletContext } from '../constants/walletContext';
import {createContractInstance} from '../constants/contracts.jsx';
const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const BecomeCandidate = () => {
  const [becomeCandidateUpdate, setBecomeCandidateUpdate] = useState("Request to become a candidate");
  const [isLoading, setIsLoading] = useState(false);
  const { userAddress , web3, setTransaction } =useContext(WalletContext);

  useEffect(() => {

  }, []);

  const becomeCandidateButton = async () => {
    try{
      setIsLoading(true);
      setTransaction(true);

      const contract = createContractInstance(web3);
      const receipt = await contract.methods.candidateRegistration().send({from: userAddress});

      const event = receipt.events.registrationStatus;

      if(event){
        setBecomeCandidateUpdate("You are successfully registered as a candidate");
      }
      else{
        setBecomeCandidateUpdate("Registration success, but no event emitted");
      }

    }catch(error){
      console.error(error);
      setBecomeCandidateUpdate(error.message);
    }
    finally {
      setIsLoading(false);
      setTransaction(false);
    }
  }

  return (
    <div className='space-y-4'>
        <div className='p-2 space-y-4 bg-button1-color rounded-lg border'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Become a Candidate</h1>
            <div className='flex justify-start items-center space-x-3'>
                <button onClick={becomeCandidateButton} disabled={isLoading} className='px-3 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>
                  {isLoading ? 'Processing...' : 'Send request'}
                </button>
                <p>{becomeCandidateUpdate}</p>
            </div>
        </div>
    </div>
  )
}

export default BecomeCandidate
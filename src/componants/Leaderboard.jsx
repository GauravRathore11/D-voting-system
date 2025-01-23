import React, { useContext, useEffect, useState } from 'react'
// import { Candidates } from '../constants/util'
import { createContractInstance } from '../constants/contracts';
import { WalletContext } from '../constants/walletContext';

const Leaderboard = () => {
  const { web3 } = useContext(WalletContext);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
        try{
            const contract = createContractInstance(web3);

            //fetch addresses array -> candidates;
            const candidateAddresses = await contract.methods.candidates().call();

            //fetch details for each candidate
            const candidateDetails = await Promise.all(
                candidateAddresses.map(async (address) => {
                    const candidate = await contract.methods.registeredAccounts(address).call();
                    return({
                        address,
                        name : candidate.name,
                        age : candidate.age,
                        votes : candidate.voteCount
                    });
                })
            );

            setCandidates(candidateDetails);
        }catch(error){
            console.log(error.message);
        }
    }

    fetchCandidateDetails();
  }, [web3]);

  return (
    <div className='bg-gradient-to-r from-nav2-color to-nav1-color w-full rounded-lg p-2'>
        <h1 className='text-2xl sm:block sm:text-4xl lg:text-5xl mb-2'>Leaderboard</h1>
        <div className='bg-button1-color rounded-lg p-2 mb-2 flex justify-between text-lg text-red-400'>
            <h1>Candidate</h1>
            <h1>Votes</h1>
        </div>


        <ul>
            {candidates.map((candidate, index) => (
                <div key={index} className='bg-button1-color rounded-lg p-2 mb-2'>
                    <div className='flex justify-between'>
                        <h1>{candidate.name}(Age : {candidate.age})</h1>
                        <h1>{candidate.voteCount}</h1>
                    </div>
                    <h5 className='text-neutral-500 text-sm'>{candidate.address}</h5>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Leaderboard
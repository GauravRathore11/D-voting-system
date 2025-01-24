import React, { useContext, useEffect, useState } from 'react'
// import { Candidates } from '../constants/util'
import { createContractInstance } from '../constants/contracts';
import { WalletContext } from '../constants/walletContext';

const Leaderboard = () => {
  const { web3, userAddress, transaction} = useContext(WalletContext);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
        try {
            const contract = createContractInstance(web3);

            //get count of all candidates
            const candidateCount = await contract.methods.getCandidateCount().call();

            console.log("count : "+candidateCount);

            //fetch addresses of all candiates using for loop
            const candidateAddresses = [];
            
            for(let i=0;i<candidateCount;++i) 
                candidateAddresses.push(await contract.methods.candidates(i).call());
            
            //we have address list now use these addresses to fetch candidate details
            const candidateDetails = await Promise.all(
                candidateAddresses.map(async (address) => {
                    const candidate = await contract.methods.registeredAccounts(address).call();

                    return {
                        address,
                        name : candidate.name,
                        age : candidate.age,
                        votes : candidate.voteCount
                    };
                })
            );

            console.log(candidateDetails);
            setCandidates(candidateDetails);
        } catch (error) {
            console.log(error.message);
        }
    }

    fetchCandidateDetails();
  },[web3, userAddress, transaction]);

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
                        <h1>{candidate.name}(Age : {Number(candidate.age)})</h1>
                        <h1>{Number(candidate.votes)}</h1>
                    </div>
                    <h5 className='text-neutral-500 text-sm'>{candidate.address}</h5>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Leaderboard
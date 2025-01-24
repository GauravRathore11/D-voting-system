import React, { useContext, useState } from 'react'
import { createContractInstance } from '../constants/contracts';
import { WalletContext } from '../constants/walletContext';

const inputStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const VotingSection = () => {

  const [voteUpdate, setVoteUpdate] = useState("Vote for this candidate");
  const { web3 , userAddress, setTransaction} = useContext(WalletContext);
  const [ voteAddress, setVoteAddress ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const voteFunction = async (voteAddress) => {
    if(voteAddress === ""){
      setVoteUpdate("Invalid user address");
      return;
    }

    try{
      setIsLoading(true);
      setTransaction(true);
      const contract = createContractInstance(web3);
      const receipt = await contract.methods.vote(voteAddress).send({from:userAddress});

      const event = receipt.events.voted;

      if(event){
        setVoteUpdate("You have voted successfully");
      }
      else{
        setVoteUpdate("Voting process terminated");
      }
    }catch(error){
      console.error(error);
      setVoteUpdate(error.message);
    }finally{
      setIsLoading(false);
      setTransaction("start");
    }
  }

  return (
    <div className='w-full'>
      <div className='space-y-2 p-2 bg-gradient-to-r from-nav1-color via-nav2-color to-button1-color rounded-lg'>
        <h1 className='text-1xl sm:text-2xl lg:text-3xl '>
          <span className='text-button1-color'>
            Vote for a Candidate {" "}
          </span>
          using their public address
        </h1>

        <input onChange={(e) => setVoteAddress(e.target.value)} value={voteAddress} type="text" placeholder='public id/address of candidate' className={inputStyle} />
        
        <div className='flex justify-start items-center space-x-3'>
            <button disabled={isLoading} onClick={() => voteFunction(voteAddress)} className='px-4 py-1 bg-green-600 rounded-lg border hover:bg-green-900'>
              {isLoading? 'processing' : 'Vote'}
            </button>
            <p>{voteUpdate}</p>
        </div>

      </div>
    </div>
  )
}

export default VotingSection
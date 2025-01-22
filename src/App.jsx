import React from "react";
import Header from "./componants/Header";
import RegistrationSection from './componants/RegistrationSection';
import Instructions from './componants/Instructions';
import Leaderboard from './componants/Leaderboard';
import BecomeCandidate from './componants/BecomeCandidate';
import VotingSection from './componants/VotingSection';

function App() {
  return (
    <>
      <Header />
      <div className='p-3 flex flex-col lg:flex-row gap-4'>
        <div className="w-full space-y-4">
          <Instructions />
          <RegistrationSection />
          <BecomeCandidate />
        </div>

        <div className="w-full space-y-4">
          <VotingSection />
          <Leaderboard />
        </div>
        
      </div>
      
    </>
    
  );
}

export default App;

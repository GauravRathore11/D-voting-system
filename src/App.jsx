import React from "react";
import Header from "./componants/Header";
import RegistrationSection from './componants/RegistrationSection';
import Instructions from './componants/Instructions';
import Leaderboard from './componants/Leaderboard';

function App() {
  return (
    <>
      <Header />
      <div className='p-3 flex flex-col lg:flex-row gap-4'>
        <div className="w-full">
          <Instructions />
          <RegistrationSection />
        </div>
        <Leaderboard />
      </div>
      
    </>
    
  );
}

export default App;

import React from 'react';
import CropFutures from './components/CropFutures';
import EduContent from './components/EduContent';
import CommunityInitiative from './components/CommunityInitiative';

function App() {
  return (
    <div className="App">
      <h1>Welcome to AgriToken</h1>
      <CropFutures />
      <EduContent />
      <CommunityInitiative />
    </div>
  );
}

export default App;

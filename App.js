import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <CampsitesDirectoryPage />
      </Header>
    </div>
  )
};

export default App;
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen p-2">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;

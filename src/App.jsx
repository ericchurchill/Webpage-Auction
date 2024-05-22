import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import PrimaryBids from './components/PrimaryBids';
import MCP from './components/MCP';
import SecondaryBids from './components/SecondaryBids';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/primarybids" element={<PrimaryBids />} />
        <Route path="/mcp" element={<MCP />} />
        <Route path="/secondarybids" element={<SecondaryBids />} />
      </Routes>
    </Router>
  );
}

export default App;

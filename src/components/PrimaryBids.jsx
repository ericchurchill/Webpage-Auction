import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PrimaryBids() {
  const [SlotNumber, setSlotNumber] = useState('');
  const [BusNumber, setBusNumber] = useState(localStorage.getItem('BusNumber') || '');
  const [Power, setPower] = useState('');
  const [Price, setPrice] = useState('');

  const insertBid = async () => {
    const response = await fetch('https://auction-web-10k5.onrender.com/Primarybids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ SlotNumber, BusNumber, Power, Price }),
    });
    const data = await response.json();
    console.log (data);
    alert("success");
  };

  const handleMCPClick = () => {
    navigate('/mcp');
  };

  const navigate = useNavigate();
  
  const handleSecondaryBidsClick = () => {
    navigate('/secondarybids');
  };

  const logout = () => {
    alert('You have been logged out!');
    window.location.href = '/login';
  };
  
  return (
    <div align="center">
      <br /><br /><br />
      <h2>Primary Auction</h2>
      <form autoComplete="on">
        <table align="center">
          <tr>
            <td><label htmlFor="SlotNumber">Slot Number:</label></td>
            <td><input type="text" id="SlotNumber" value={SlotNumber} onChange={(e) => setSlotNumber(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="BusNumber">Bus Number:</label></td>
            <td><input type="text" id="BusNumber" value={BusNumber} onChange={(e) => setBusNumber(e.target.value)} readOnly /></td>
          </tr>
          <tr>
            <td><label htmlFor="Power">Power:</label></td>
            <td><input type="text" id="Power" value={Power} onChange={(e) => setPower(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="Price">Price:</label></td>
            <td><input type="text" id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} /></td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="button" onClick={insertBid}>Submit</button>
              <button type="button" onClick={logout}>Logout</button>
            </td>
          </tr>
        </table>
      </form>
      <div>
      <h3>Navigation</h3>
      <div>
        <button onClick={handleMCPClick}>Go to MCP</button>
      </div>
      <div>
        <button onClick={handleSecondaryBidsClick}>Go to Secondary Bids</button>  
      </div>
    </div>
    </div>
  );
}

export default PrimaryBids;

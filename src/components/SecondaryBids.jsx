import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SecondaryBids() {
  const [SlotNumber, setSlotNumber] = useState('');
  const [BusNumber, setBusNumber] = useState(localStorage.getItem('BusNumber') || '');
  const [incPower, setIncPower] = useState('');
  const [decPower, setDecPower] = useState('');
  const [incPrice, setIncPrice] = useState('');

  const insertSecondaryBid = async () => {
    const response = await fetch('https://auction-web-10k5.onrender.com/Secondarybids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ SlotNumber, BusNumber, incPower, decPower, incPrice }),
    });
    const data = await response.json();
    console.log (data);
    alert("success");
  };

  const handlePBClick = () => {
    navigate('/PrimaryBids');
  };

  return (
    <div align="center">
      <br /><br /><br />
      <h2>Secondary Auction</h2>
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
            <td><label htmlFor="incPower">Increase Power:</label></td>
            <td><input type="text" id="incPower" value={incPower} onChange={(e) => setIncPower(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="decPower">Decrease Power:</label></td>
            <td><input type="text" id="decPower" value={decPower} onChange={(e) => setDecPower(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="incPrice">Increase Price:</label></td>
            <td><input type="text" id="incPrice" value={incPrice} onChange={(e) => setIncPrice(e.target.value)} /></td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="button" onClick={insertSecondaryBid}>Submit</button>
              </td>
          </tr>
        </table>
      </form>
      <button onClick={handlePBClick}>Homepage</button>
    </div>
  );
}

export default SecondaryBids;

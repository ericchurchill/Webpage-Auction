import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MCP() {
  const [slotNumber, setSlotNumber] = useState('');
  const [mcp, setMcp] = useState('');
  const [busPower, setBusPower] = useState('');

  const retrieveData = () => {
    const slotNumberValue = slotNumber;
    const busNumber = localStorage.getItem('BusNumber');

    fetch('https://auction-web-10k5.onrender.com/MCP')
      .then(response => response.json())
      .then(data => {
        let busPowerValue = '';
        let mcpValue = '';
        for (let object of data) {
          mcpValue = object['MCP'];
          switch (busNumber) {
            case '1':
              busPowerValue = object['Bus1'];
              break;
            case '2':
              busPowerValue = object['Bus2'];
              break;
            case '3':
              busPowerValue = object['Bus3'];
              break;
            case '4':
              busPowerValue = object['Bus4'];
              break;
            case '5':
              busPowerValue = object['Bus5'];
              break;
            default:
              break;
          }
        }
        setSlotNumber(`Slot number: ${slotNumberValue}`);
        setMcp(`MCP: ${mcpValue}`);
        setBusPower(`Allotted bus power: ${busPowerValue}`);
      })
      .catch(error => console.error('Error fetching MCP data:', error));
  };
  
  const navigate = useNavigate();

  const handlePBClick = () => {
    navigate('/PrimaryBids');
  };

  return (
    <div>
      <h2>MCP and Bus power</h2>
      <form onSubmit={(e) => { e.preventDefault(); retrieveData(); }}>
        <label htmlFor="SlotNumber">Slot number:</label>
        <input
          type="text"
          id="SlotNumber"
          name="SlotNumber"
          value={slotNumber}
          onChange={(e) => setSlotNumber(e.target.value)}
        />
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>

      <h3 id="slotResult">{slotNumber}</h3>
      <h3 id="mcpResult">{mcp}</h3>
      <h3 id="busPowerResult">{busPower}</h3>

      <button onClick={handlePBClick}>Homepage</button>
    </div>
  );
}

export default MCP;

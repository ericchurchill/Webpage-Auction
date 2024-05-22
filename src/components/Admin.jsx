import React from 'react';

function Admin() {
  const loadPrimaryBids = () => {
    fetch('https://auction-web-10k5.onrender.com/Primarybids')
      .then(response => response.json())
      .then(data => {
        let trHTML = '';
        trHTML += "<div class='table-responsive'>";
        trHTML += "<table class='table'>";
        trHTML += "<thead>";
        trHTML += "<tr> <th scope='col'>ID</th> <th scope='col'>SLOT NUMBER</th>  <th scope='col'>BUS NUMBER</th>  <th scope='col'>POWER</th>   <th scope='col'>PRICE</th>  </tr>  </thead> ";
        trHTML += "<tbody>";

        data.forEach(object => {
          trHTML += "<tr>";
          trHTML += `<td>${object.id}</td>`;
          trHTML += `<td>${object.SlotNumber}</td>`;
          trHTML += `<td>${object.BusNumber}</td>`;
          trHTML += `<td>${object.Power}</td>`;
          trHTML += `<td>${object.Price}</td>`;
          trHTML += "</tr>";
        });

        trHTML += "</tbody> </table> </div>";
        document.getElementById('auctionTable').innerHTML = trHTML;
      });
  };

  const loadMCP = () => {
    fetch('https://auction-web-10k5.onrender.com/MCP')
      .then(response => response.json())
      .then(data => {
        let trHTML = '';
        trHTML += "<div class='table-responsive'>";
        trHTML += "<table class='table'>";
        trHTML += "<thead>";
        trHTML += "<tr> <th scope='col'>SLOT NUMBER</th>  <th scope='col'>MCP</th> <th scope='col'>BUS 1</th> <th scope='col'>BUS 2</th>  <th scope='col'>BUS 3</th> <th scope='col'>BUS 4</th>  <th scope='col'>BUS 5</th> </tr></thead>";
        trHTML += "<tbody>";

        data.forEach(object => {
          trHTML += "<tr>";
          trHTML += `<td>${object.SlotNumber}</td>`;
          trHTML += `<td>${object.MCP}</td>`;
          trHTML += `<td>${object.Bus1}</td>`;
          trHTML += `<td>${object.Bus2}</td>`;
          trHTML += `<td>${object.Bus3}</td>`;
          trHTML += `<td>${object.Bus4}</td>`;
          trHTML += `<td>${object.Bus5}</td>`;
          trHTML += "</tr>";
        });

        trHTML += "</tbody> </table> </div>";
        document.getElementById('auctionTable').innerHTML = trHTML;
      });
  };

  const loadSecondaryBids = () => {
    fetch('https://auction-web-10k5.onrender.com/Secondarybids')
      .then(response => response.json())
      .then(data => {
        let trHTML = '';
        trHTML += "<div class='table-responsive'>";
        trHTML += "<table class='table'>";
        trHTML += "<thead>";
        trHTML += "<tr> <th scope='col'>ID</th> <th scope='col'>SLOT NUMBER</th>  <th scope='col'>BUS NUMBER</th>  <th scope='col'>INC. POWER</th>   <th scope='col'>DEC. POWER</th> <th scope='col'>VARYING PRICE</th>   </tr>  </thead> ";
        trHTML += "<tbody>";

        data.forEach(object => {
          trHTML += "<tr>";
          trHTML += `<td>${object.id}</td>`;
          trHTML += `<td>${object.SlotNumber}</td>`;
          trHTML += `<td>${object.BusNumber}</td>`;
          trHTML += `<td>${object.incPower}</td>`;
          trHTML += `<td>${object.decPower}</td>`;
          trHTML += `<td>${object.incPrice}</td>`;
          trHTML += "</tr>";
        });

        trHTML += "</tbody> </table> </div>";
        document.getElementById('auctionTable').innerHTML = trHTML;
      });
  };

  const logout = () => {
    alert('You have been logged out!');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>ISO</h2>
      <button className="submitBtn" onClick={loadPrimaryBids}>Primary Auction</button>
      <button className="submitBtn" onClick={loadMCP}>MCP</button>
      <button className="submitBtn" onClick={loadSecondaryBids}>Secondary Auction</button>
      <button className="submitBtn" onClick={logout}>Logout</button>
      <div className="container" id="auctionTable"></div>
    </div>
  );
}

export default Admin;

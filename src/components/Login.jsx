import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userName = username;
    const pass = password;

    if (userName === "" || pass === "") {
      alert("User Name or Password should not be left blank");
    } else {
      switch (userName) {
        case "Admin":
          if (pass === "123") {
            alert("Admin login successful");
            navigate("/admin"); // Navigate to the admin page
          } else {
            alert("Incorrect password for Admin");
          }
          break;
        case "GENCO1":
          if (pass === "123") {
            localStorage.setItem("BusNumber", "1");
            alert("GENCO 1 login successful");
            navigate("/primarybids"); // Navigate to the index page
          } else {
            alert("Incorrect password for GENCO1");
          }
          break;
        case "GENCO2":
          if (pass === "123") {
            localStorage.setItem("BusNumber", "2");
            alert("GENCO 2 login successful");
            navigate("/primarybids"); // Navigate to the index page
          } else {
            alert("Incorrect password for GENCO2");
          }
          break;
        case "DISCO1":
          if (pass === "123") {
            localStorage.setItem("BusNumber", "3");
            alert("DISCO 1 login successful");
            navigate("/primarybids"); // Navigate to the index page
          } else {
            alert("Incorrect password for DISCO1");
          }
          break;
        case "DISCO2":
          if (pass === "123") {
            localStorage.setItem("BusNumber", "4");
            alert("DISCO 2 login successful");
            navigate("/primarybids"); // Navigate to the index page
          } else {
            alert("Incorrect password for DISCO2");
          }
          break;
        case "DISCO3":
          if (pass === "123") {
            localStorage.setItem("BusNumber", "5");
            alert("DISCO 3 login successful");
            navigate("/primarybids"); // Navigate to the index page
          } else {
            alert("Incorrect password for DISCO3");
          }
          break;
        default:
          alert("Unauthorised login credentials");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

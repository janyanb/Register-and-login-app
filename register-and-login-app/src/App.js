import React, { useState } from "react";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Edit from "./components/edituser/edituser";
import './App.css';
import {BrowserRouter as Switch, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  const [seluser, setSelUser] = useState({});
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<Homepage seluser={seluser}/>}/>
       <Route path="/login" element={<Login setSelUser={setSelUser}/>}/>   
       <Route path="/register" element={<Register/>}/>
       <Route path="/editUser" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>  
      );
}

export default App;

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Navbar from "./component/Navbar";
import Homepage from "./page/Homepage";
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
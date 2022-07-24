import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

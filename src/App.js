import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<ProtectedRoute ><Dashboard  /></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

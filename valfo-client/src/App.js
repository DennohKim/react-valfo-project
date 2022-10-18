import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Land from "./pages/Land";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import { ContextProvider } from "./context/ContextProvider";

function App() {

  
  return (
    <>
      <AuthContextProvider>
      <ContextProvider >
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/land" element={<Land />}></Route>
            <Route path="/residential" element={<Residential />}></Route>
            <Route path="/commercial" element={<Commercial />}></Route>
          </Routes>
          </ContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

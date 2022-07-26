import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const landUrl = "https://valfo-map-app.herokuapp.com/land";
  const residentialUrl = "https://valfo-map-app.herokuapp.com/residential";
  const commercialUrl = "https://valfo-map-app.herokuapp.com/commercial";

  const [land, setLand] = useState([]);
  const [residential, setResidential] = useState([]);
  const [commercial, setCommercial] = useState([]);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    fetch(landUrl)
      .then((res) => res.json())
      .then((land) => setLand(land));
  }, []);

  useEffect(() => {
    fetch(residentialUrl)
      .then((res) => res.json())
      .then((residential) => setResidential(residential));
  }, []);

  useEffect(() => {
    fetch(commercialUrl)
      .then((res) => res.json())
      .then((commercial) => setCommercial(commercial));
  }, []);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        land,
        setLand,
        residential,
        setResidential,
        commercial,
        setCommercial,
        landUrl,
        residentialUrl,
        commercialUrl,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

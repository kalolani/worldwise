/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";
const Base_Url = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);

        await sleep(500);

        const res = await fetch(`${Base_Url}/cities`);
        const data = await res.json();

        setCities(data);
      } catch {
        alert("there was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);

      await sleep(500);

      const res = await fetch(`${Base_Url}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("there was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("context used outside the scope");
  return context;
}

export { CitiesProvider, useCities };

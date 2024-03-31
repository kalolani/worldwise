import { useState, useEffect, createContext, useContext } from "react";
const Base_Url = "http://localhost:9000";

const citiesContext = createContext();
function citiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <citiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </citiesContext.Provider>
  );

  function useCities() {
    const context = useContext(citiesContext);
    if (context === undefined)
      throw new Error("context used outside the scope");
    return context;
  }
}
export { citiesProvider, useCities };

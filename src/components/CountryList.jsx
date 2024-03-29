import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
// eslint-disable-next-line react/prop-types
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return (
      <Message message="add your city on the map by clicking the city on the map" />
    );
  // eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {/*eslint-disable-next-line react/prop-types*/}
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;

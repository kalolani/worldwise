/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

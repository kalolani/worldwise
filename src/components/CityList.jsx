import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
// eslint-disable-next-line react/prop-types
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {/*eslint-disable-next-line react/prop-types*/}
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

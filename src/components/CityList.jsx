import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/citiesProvider";

function CityList() {
  const { cities, isLoading, error } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={error} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

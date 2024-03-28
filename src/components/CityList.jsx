import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
// eslint-disable-next-line react/prop-types
function CityList({ cities, isLoading }) {
  return (
    <ul className={styles.cityList}>
      {/*eslint-disable-next-line react/prop-types */}
      {cities.map((city) => (
        <Cityitem city={city} isLoading={isLoading} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

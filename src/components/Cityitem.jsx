/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./cityItem.module.css";
import FlagImoji from "./FlagImoji";
import { useCities } from "../contexts/citiesProvider";
// eslint-disable-next-line react/prop-types
function CityItem({ city }) {
  // eslint-disable-next-line react/prop-types

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <>
      <li>
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>
            <FlagImoji countryCode={emoji} />
          </span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn} onClick={handleClick}>
            &times;
          </button>
        </Link>
      </li>
    </>
  );
}

export default CityItem;

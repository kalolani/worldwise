/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";
import FlagImoji from "./FlagImoji";

// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {/*eslint-disable-next-line react/prop-types*/}
      <span>
        <FlagImoji countryCode={country.emoji} />
      </span>
      {/*eslint-disable-next-line react/prop-types*/}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

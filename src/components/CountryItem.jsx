import styles from "./CountryItem.module.css";

// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {/*eslint-disable-next-line react/prop-types*/}
      <span>{country.emoji}</span>
      {/*eslint-disable-next-line react/prop-types*/}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

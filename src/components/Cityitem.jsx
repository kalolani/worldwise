import styles from "./cityItem.module.css";
// eslint-disable-next-line react/prop-types
function Cityitem({ city }) {
  // eslint-disable-next-line react/prop-types

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date } = city;
  return (
    <>
      <li className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </li>
    </>
  );
}

export default Cityitem;

<<<<<<< HEAD
/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
=======
import styles from "./Button.module.css";
function Button({ children, type, onClick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Button;
>>>>>>> 4d547c2c730b0007df06ccf149813537f49ca39e

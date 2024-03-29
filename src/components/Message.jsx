import styles from "./Message.module.css";

// eslint-disable-next-line react/prop-types
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;

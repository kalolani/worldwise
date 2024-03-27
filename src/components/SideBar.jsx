import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;

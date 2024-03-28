import { Outlet, Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;

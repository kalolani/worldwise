import { Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; kaleab {new Date().getFullYear()} WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;

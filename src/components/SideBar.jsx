<<<<<<< HEAD
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
=======
import styles from "./SideBar.module.css";

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
>>>>>>> 36d479a1a39beab9aad16e821571c646764fcbe9

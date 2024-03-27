import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <NavLink to="/price">pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;

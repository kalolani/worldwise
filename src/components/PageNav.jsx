import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/price">pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;

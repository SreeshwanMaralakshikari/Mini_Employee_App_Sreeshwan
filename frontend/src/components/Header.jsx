import { NavLink } from 'react-router';
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from '../styles/common';

function Header() {
  return (
    <nav className={navbarClass}>
      <div className={navContainerClass}>

        {/* BRAND */}
        <NavLink to="/" className={navBrandClass}>
          EmpManager
        </NavLink>

        {/* NAV LINKS */}
        <ul className={navLinksClass}>
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="create-emp"
              className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}
            >
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="list"
              className={({ isActive }) => (isActive ? navLinkActiveClass : navLinkClass)}
            >
              Employees
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Header;

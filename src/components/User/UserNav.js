import React from "react";
import style from "./UserNav.module.css";
import { NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <section>
      <nav className={style.userNav}>
        <ul>
          <li className={style.navItems}>
            <NavLink
              to={"/design-2/reputation"}
              className={(nav) => (nav.isActive ? style.active : "")}
            >
              Reputation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/design-2/new-users"}
              className={(nav) => (nav.isActive ? style.active : "")}
            >
              New Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/design-2/voters"}
              className={(nav) => (nav.isActive ? style.active : "")}
            >
              Voters
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/design-2/editors"}
              className={(nav) => (nav.isActive ? style.active : "")}
            >
              Editors
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/design-2/moderators"}
              className={(nav) => (nav.isActive ? style.active : "")}
            >
              moderators
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default UserNav;

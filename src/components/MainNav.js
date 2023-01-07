import React, { useState } from "react";
import style from "./MainNav.module.css";
import { NavLink, Outlet } from "react-router-dom";

const MainNav = () => {
  const [navIsActive, setNavIsActive] = useState(false);
  const navToggleHandler = () => {
    setNavIsActive((prev) => {
      return !prev;
    });
  };

  let toggleNav = navIsActive
    ? `${style.navbarLink} ${style.active}`
    : style.navbarLink;
  return (
    <>
      <header>
        <nav className={style.navbar}>
          <ul>
            <li className={style.navbarLogo}>Santos</li>
            <li className={style.navbarToggle} onClick={navToggleHandler}>
              <i className={`fas fa-bars ${style.hamburger}`}></i>
            </li>
            <li className={toggleNav}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? style.navbarActive : ""
                }
                to={"/design-1"}
              >
                Design-1
              </NavLink>
            </li>
            <li className={toggleNav}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? style.navbarActive : ""
                }
                to={"/design-2"}
              >
                Design-2
              </NavLink>
            </li>
            <li className={toggleNav}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? style.navbarActive : ""
                }
                to={"/design-3"}
              >
                Design-3
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MainNav;

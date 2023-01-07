import React from "react";
import style from "./Header.module.css";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header>
      <h1 className={`mb-3  ${style.title}`}>User</h1>
      <div className={style.header}>
        <SearchBar />
        <UserNav />
      </div>
    </header>
  );
};

export default Header;

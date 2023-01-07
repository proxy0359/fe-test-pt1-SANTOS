import React from "react";
import style from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className={style.boxContainer}>
      <a>
        <SearchIcon className={style.searchIcon} />
      </a>

      <input
        type={"text"}
        placeholder="Search Users"
        className={style.search}
      />
    </div>
  );
};

export default SearchBar;

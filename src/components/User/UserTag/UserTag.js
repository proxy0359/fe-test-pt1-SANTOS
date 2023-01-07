import React from "react";
import style from "./UserTag.module.css";

const UserTag = (props) => {
  return (
    <div className={style.tag}>
      <p>{props.children}</p>
    </div>
  );
};

export default UserTag;

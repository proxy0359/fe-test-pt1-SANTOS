import React from "react";
import style from "./NewUsers.module.css";
import NewUserCard from "../../UI/NewUserCard";

import face1 from "./Photos/face1.jpg";
import face2 from "./Photos/face2.jpg";
import face3 from "./Photos/face3.jpg";
import face4 from "./Photos/face4.jpg";
import face5 from "./Photos/face5.jpg";
import face6 from "./Photos/face6.jpeg";
import UserTag from "../UserTag/UserTag";

const NewUsers = () => {
  // I Could use a map here but instead i Print it manually :D
  return (
    <div className={style.users}>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face1} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Lelah Nichols</h1>
          <p className={style.info}>Troy, MI</p>
          <div className={style.userTag}>
            {/* manualy putting data but can put a map in here :D */}
            <UserTag>Clothes</UserTag>
            <UserTag>Stem </UserTag>
          </div>
        </div>
      </NewUserCard>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face2} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Jesus Weiss</h1>
          <p className={style.info}>Fort Worth, TX</p>
          <div className={style.userTag}>
            {/* manualy putting data but can put a map in here :D */}
            <UserTag>headset</UserTag>
            <UserTag>gadget</UserTag>
            <UserTag>speed</UserTag>
            <UserTag>winter</UserTag>
          </div>
        </div>
      </NewUserCard>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face3} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Annie Rice</h1>
          <p className={style.info}>Austin, TX</p>
          {/* manualy putting data but can put a map in here :D */}
          <div className={style.userTag}>
            <UserTag>road</UserTag>
            <UserTag>mountain</UserTag>
            <UserTag>trip</UserTag>
            <UserTag>earth</UserTag>
            <UserTag>nature</UserTag>
          </div>
        </div>
      </NewUserCard>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face4} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Robert Brower</h1>
          <p className={style.info}>Cincinnati, OH</p>
          {/* manualy putting data but can put a map in here :D */}
          <div className={style.userTag}>
            <UserTag>Maintance</UserTag>
            <UserTag>gears</UserTag>
            <UserTag>frames</UserTag>
            <UserTag>repair</UserTag>
          </div>
        </div>
      </NewUserCard>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face5} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Amy Campbell</h1>
          <p className={style.info}>Warrior, AL</p>
          {/* manualy putting data but can put a map in here :D */}
          <div className={style.userTag}>
            <UserTag>music</UserTag>
            <UserTag>disks</UserTag>
          </div>
        </div>
      </NewUserCard>
      <NewUserCard className={style.card}>
        <div className={style.profile}>
          <img src={face6} />
        </div>
        <div className={style.userInfo}>
          <h1 className={style.name}>Anthony S. Morin</h1>
          <p className={style.info}>Lyndhurst, NJ</p>
          {/* manualy putting data but can put a map in here :D */}
          <div className={style.userTag}>
            <UserTag>vintage</UserTag>
            <UserTag>electric</UserTag>
          </div>
        </div>
      </NewUserCard>
    </div>
  );
};

export default NewUsers;

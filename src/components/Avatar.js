import React from "react";
import styles from "../styles/Avatar.module.css";

// Avatar is used wherever the users profile picture is displayed

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
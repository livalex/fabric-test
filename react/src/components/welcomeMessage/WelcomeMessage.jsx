import React from "react";
import classes from "./WelcomeMessage.module.css";
import wallpaper from "../../assets/matrix.jpg";

const WelcomeMessage = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.wallpaper}
        src={wallpaper}
        alt="Matrix wallpaper"
      />
      <div className={classes.message}>
        Press the buttons to fetch movie data!
      </div>
    </div>
  );
};

export default WelcomeMessage;

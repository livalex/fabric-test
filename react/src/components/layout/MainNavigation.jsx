import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Button from "@mui/material/Button";
import AppContext from "../../store/app-context";
import { link1, link2, link3 } from "../../utils/constants";

const MainNavigation = (props) => {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const clickHandler = (link) => {
    ctx.setLink(link);
    navigate("/data");
  };

  const listItem = (name, link) => (
    <li>
      <Button
        variant="contained"
        size="large"
        onClick={() => clickHandler(link)}
      >
        {name}
      </Button>
    </li>
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fabric Test</div>
      <nav className={classes.nav}>
        <ul>
          {listItem("Button 1", link1)}
          {listItem("Button 2", link2)}
          {listItem("Button 3", link3)}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

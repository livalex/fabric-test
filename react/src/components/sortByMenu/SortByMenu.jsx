import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppContext from "../../store/app-context";

const SortByMenu = (props) => {
  const ctx = useContext(AppContext);
  const { setSortBy } = ctx;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    setSortBy(event.target.innerText);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Sort By
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Title</MenuItem>
        <MenuItem onClick={handleClose}>Year</MenuItem>
        <MenuItem onClick={handleClose}>imdbID</MenuItem>
        <MenuItem onClick={handleClose}>Type</MenuItem>
        <MenuItem onClick={handleClose}>Poster</MenuItem>
      </Menu>
    </div>
  );
};

export default SortByMenu;

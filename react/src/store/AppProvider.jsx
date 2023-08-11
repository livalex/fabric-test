import { useState } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  searchedLink: "",
  setLink: () => {},
  sortBy: "",
  setSortBy: () => {},
};

const AppProvider = (props) => {
  const [link, setLink] = useState("");
  const [sortBy, setSortBy] = useState("");

  const appContext = {
    link,
    setLink,
    sortBy,
    setSortBy,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

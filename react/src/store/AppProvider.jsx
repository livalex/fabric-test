import { useState } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  searchedLink: "",
};

const AppProvider = (props) => {
  const [link, setLink] = useState("");

  const appContext = {
    link,
    setLink,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

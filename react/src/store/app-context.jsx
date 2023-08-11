import React from "react";

const AppContext = React.createContext({
  searchedLink: "",
  setLink: () => {},
  sortBy: "",
  setSortBy: () => {},
});

export default AppContext;

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortByMenu from "./SortByMenu";

test("check the existence of sort button", () => {
  render(<SortByMenu />);

  expect(screen.getByRole("button", { name: "Sort By" })).toBeInTheDocument();
});

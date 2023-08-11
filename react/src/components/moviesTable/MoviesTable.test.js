import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviesTable from "./MoviesTable";
import TableContainer from "@mui/material/TableContainer";

test("check the existence of data table", () => {
  render(<MoviesTable />);

  expect(screen.getByText("Title")).toBeInTheDocument();
});

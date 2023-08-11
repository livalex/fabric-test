import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainNavigation from "./MainNavigation";
import { BrowserRouter } from "react-router-dom";

test("check the existence of three buttons", () => {
  render(
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>
  );

  expect(screen.getByRole("button", { name: "Button 1" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Button 2" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Button 3" })).toBeInTheDocument();
});

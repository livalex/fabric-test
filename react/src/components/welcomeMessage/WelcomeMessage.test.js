import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomeMessage from "./WelcomeMessage";

test("check the existence of three buttons", () => {
  render(<WelcomeMessage />);

  expect(screen.getByRole("img")).toBeInTheDocument();
});

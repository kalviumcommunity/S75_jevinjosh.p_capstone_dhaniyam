import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'; 

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stock from "./pages/Stock";
import Appointment from "./pages/Appointment";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

test("renders Home page", () => {
  renderWithRouter(<Home />);
  const textElement = screen.getByText(/welcome to dhaniyam/i);
  expect(textElement).toBeInTheDocument();
});

test("renders Login page", () => {
  renderWithRouter(<Login />);
  const heading = screen.getByRole("heading", { name: /login/i });
  expect(heading).toBeInTheDocument();
});

test("renders Signup page", () => {
  renderWithRouter(<Signup />);
  const heading = screen.getByRole("heading", { name: /signup/i });
  expect(heading).toBeInTheDocument();
});

test("renders Stock page", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ stock: [{ item: "Rice", quantity: "10 kg" }] }),
    })
  );

  renderWithRouter(<Stock />);

  await waitFor(() => {
    expect(screen.getByText(/rice/i)).toBeInTheDocument();
  });

  global.fetch.mockClear();
});

test("renders Appointment page", () => {
  renderWithRouter(<Appointment />);
  const heading = screen.getByRole("heading", { name: /book appointment/i });
  expect(heading).toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./Search";

describe("Search component", () => {
  it("renders the search input", () => {
    const searchTerm = "John";
    const onSearchChange = jest.fn();
    render(<Search searchTerm={searchTerm} onSearchChange={onSearchChange} />);

    const searchInput = screen.getByPlaceholderText("Search by user...");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue(searchTerm);
  });

  it("calls onSearchChange when the search input value changes", () => {
    const onSearchChange = jest.fn();
    render(<Search searchTerm="" onSearchChange={onSearchChange} />);

    const searchInput = screen.getByPlaceholderText("Search by user...");

    fireEvent.change(searchInput, { target: { value: "John" } });

    expect(onSearchChange).toHaveBeenCalledWith(expect.anything());
  });
});

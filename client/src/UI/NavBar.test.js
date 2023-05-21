import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

const MockNavBar = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

describe("NavBar", () => {

  test("Renders a visible link to stations page", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Stations"});
    expect(linkElement).toBeVisible();
  });
      
  test("Renders a visible link to trips page", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Trips"});
    expect(linkElement).toBeVisible();
  });
      
  test("Renders a visible link to home page", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Helsinki city bike app"});
    expect(linkElement).toBeVisible();
  });

  test("Renders 3 links on navbar", () => {
    render(<MockNavBar />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(3);
  });

  test("Link to home page has correct href", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Helsinki city bike app"});
    expect(linkElement).toHaveAttribute("href", "/");
  });

  test("Link to trips page has correct href", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Trips"});
    expect(linkElement).toHaveAttribute("href", "/trips");
  });

  test("Link to stations page has correct href", () => {
    render(<MockNavBar />);
    const linkElement = screen.getByRole("link", {name: "Stations"});
    expect(linkElement).toHaveAttribute("href", "/stations");
  });
});


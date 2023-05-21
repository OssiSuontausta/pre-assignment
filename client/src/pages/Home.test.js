import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home page", () => {

  test("Renders a visible link to Solita pre-assignment github page", () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", {name: "here"});
    expect(linkElement).toBeVisible();
  });

  test("Renders a visible link to HSL page", () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", {name: "HSL"});
    expect(linkElement).toBeVisible();
  });

  test("Renders a visible link to City Bike Finland homepage", () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", {name: "City Bike Finland"});
    expect(linkElement).toBeVisible();
  });

  test("Renders 3 links on home page", () => {
    render(<Home/>);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(3);
  });

  test("Link to HSL has correct href", () => {
    render(<Home/>);
    const linkElement = screen.getByRole("link", {name: "HSL"});
    /*eslint-disable-next-line*/
    expect(linkElement).toHaveAttribute("href", "https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902");
  });
  
  test("Link to City Bike Finland has correct href", () => {
    render(<Home/>);
    const linkElement = screen.getByRole("link", {name: "City Bike Finland"});
    /*eslint-disable-next-line*/
    expect(linkElement).toHaveAttribute("href", "https://www.citybikefinland.fi/");
  });

  test("Link to Solita pre-assignment has correct href", () => {
    render(<Home/>);
    const linkElement = screen.getByRole("link", {name: "here"});
    /*eslint-disable-next-line*/
    expect(linkElement).toHaveAttribute("href", "https://github.com/solita/dev-academy-2023-exercise");
  });
});
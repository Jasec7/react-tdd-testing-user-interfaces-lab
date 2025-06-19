import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App/>);
  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
   // Assert
  expect(topLevelHeading).toBeInTheDocument();
});


test("displays an image with alt identifying the content of the image", () => {
  // Arrange
  render(<App/>);
  // Act
  const imageContent = screen.getByAltText(/Jasec blonde/i);
   // Assert
  expect(imageContent).toBeInTheDocument();
});


test("displays a second level heading with the text `About Me`", () => {
  // Arrange
  render(<App/>);
  // Act
  const secondLevelHeading = screen.getByText(/About Me/i,);
   // Assert
  expect(secondLevelHeading).toBeInTheDocument();
});


test("displays a paragraph in the biography", () => {
  // Arrange
  render(<App/>);
  // Act
  const paragraph = screen.getByText(/Learning TDD/i,);
   // Assert
  expect(paragraph).toBeInTheDocument();
});


test("displays a link for Github", () => {
  // Arrange
  render(<App/>);
  // Act
  const gitLink = screen.getByRole("link",{name:/Github/i});
   // Assert
  expect(gitLink).toBeInTheDocument();
});


test("displays a link for LinkedIn", () => {
  // Arrange
  render(<App/>);
  // Act
  const linkedLink = screen.getByRole("link",{name:/LinkedIn/i});
   // Assert
  expect(linkedLink).toBeInTheDocument();
});




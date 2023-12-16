import {act, render, screen} from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from "@testing-library/user-event";


describe("Greeting component", () => {
  test("renders 'Hello World' to screen", () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // ... do nothing

    // Assert
    const helloWorldElement = screen.getByText("hello world", {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'nice to meet you' if button was NOT clicked", () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // ... do nothing

    // Assert
    const niceToMeetYouElement = screen.getByText("nice to meet you", {exact: false});
    expect(niceToMeetYouElement).toBeInTheDocument();
  });

  test("renders 'Clicked' if the button was clicked", () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole("button");
    act(() => userEvent.click(buttonElement));

    // Assert
    const clicked = screen.getByText("Clicked", {exact: false});
    expect(clicked).toBeInTheDocument();
  });
});

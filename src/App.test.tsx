import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.queryByText(/vite \+ react/i);
  expect(linkElement).toBeInTheDocument();
});

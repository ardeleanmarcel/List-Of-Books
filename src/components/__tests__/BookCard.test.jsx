import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookCard } from "../BookCard/BookCard.jsx";

describe("BookCard", () => {
  test("toggles description visibility when button is clicked", () => {
    const title = "Test Book";
    const description = "This is a test description.";

    render(<BookCard title={title} description={description} />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /hide description/i,
    });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(toggleButton);

    expect(screen.queryByText(description)).not.toBeInTheDocument();
    expect(toggleButton).toHaveTextContent(/show description/i);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });
});

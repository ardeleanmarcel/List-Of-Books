import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookList } from "../BookList/BookList.jsx";

describe("BookList", () => {
  test("renders empty state when no books are provided", () => {
    render(<BookList initialBooks={[]} />);

    expect(screen.getByText("No books available.")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("renders empty state when initialBooks is undefined", () => {
    render(<BookList />);

    expect(screen.getByText("No books available.")).toBeInTheDocument();
  });

  test("renders list of books when initialBooks are provided", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Test Book 1",
        description: "Description 1",
        imageUrl: "https://example.com/image1.jpg",
      },
      {
        id: 2,
        title: "Test Book 2",
        description: "Description 2",
        imageUrl: "https://example.com/image2.jpg",
      },
    ];

    render(<BookList initialBooks={mockBooks} />);

    expect(screen.getByText("Test Book 1")).toBeInTheDocument();
    expect(screen.getByText("Test Book 2")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  test("renders section with correct aria-label", () => {
    render(<BookList initialBooks={[]} />);

    const section = screen.getByRole("region", { name: "Book list" });
    expect(section).toBeInTheDocument();
  });

  test("renders 'Available Books' title", () => {
    render(<BookList initialBooks={[]} />);

    expect(screen.getByText("Available Books")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Available Books", level: 2 })
    ).toBeInTheDocument();
  });

  test("renders 'Add New Book' button", () => {
    render(<BookList initialBooks={[]} />);

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass("book-list-add-button");
  });

  test("adds a new book when 'Add New Book' button is clicked", () => {
    render(<BookList initialBooks={[]} />);

    expect(screen.getByText("No books available.")).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });
    fireEvent.click(addButton);

    expect(screen.queryByText("No books available.")).not.toBeInTheDocument();
    expect(screen.getByText("New Book #1")).toBeInTheDocument();
    expect(screen.getByText("This is a newly added book.")).toBeInTheDocument();
  });

  test("adds multiple books with incremental IDs", () => {
    render(<BookList initialBooks={[]} />);

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });

    fireEvent.click(addButton);
    expect(screen.getByText("New Book #1")).toBeInTheDocument();

    fireEvent.click(addButton);
    expect(screen.getByText("New Book #2")).toBeInTheDocument();

    fireEvent.click(addButton);
    expect(screen.getByText("New Book #3")).toBeInTheDocument();
  });

  test("adds new book with correct ID after existing books", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Existing Book",
        description: "Existing description",
      },
    ];

    render(<BookList initialBooks={mockBooks} />);

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });
    fireEvent.click(addButton);

    expect(screen.getByText("New Book #2")).toBeInTheDocument();
  });

  test("handles non-sequential IDs correctly", () => {
    const mockBooks = [
      {
        id: 5,
        title: "Book with ID 5",
        description: "Description",
      },
      {
        id: 10,
        title: "Book with ID 10",
        description: "Description",
      },
    ];

    render(<BookList initialBooks={mockBooks} />);

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });
    fireEvent.click(addButton);

    expect(screen.getByText("New Book #11")).toBeInTheDocument();
  });

  test("new books are added with undefined imageUrl", () => {
    render(<BookList initialBooks={[]} />);

    const addButton = screen.getByRole("button", { name: "+ Add New Book" });
    fireEvent.click(addButton);

    const placeholderImage = screen.getByAltText(
      "Placeholder cover: no image available"
    );
    expect(placeholderImage).toBeInTheDocument();
  });

  test("renders books as list items within unordered list", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Test Book",
        description: "Test description",
      },
    ];

    render(<BookList initialBooks={mockBooks} />);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("book-list-items");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveClass("book-list-item");
  });

  test("passes correct props to BookCard components", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Prop Test Book",
        description: "Prop test description",
        imageUrl: "https://example.com/test.jpg",
      },
    ];

    render(<BookList initialBooks={mockBooks} />);

    expect(screen.getByText("Prop Test Book")).toBeInTheDocument();
    expect(screen.getByText("Prop test description")).toBeInTheDocument();
    expect(
      screen.getByAltText('Cover of the book "Prop Test Book"')
    ).toBeInTheDocument();
  });
});

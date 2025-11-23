import React, { useState } from "react";
import { BookCard } from "../BookCard/BookCard.jsx";
import "./styles.css";

export function BookList({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks ?? []);

  const handleAddBook = () => {
    const nextId =
      books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

    const newBook = {
      id: nextId,
      title: `New Book #${nextId}`,
      description: "This is a newly added book without image.",
    };

    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <section aria-label="Book list" className="book-list">
      <div className="book-list-header">
        <h2 className="book-list-title">Available Books</h2>
        <button
          type="button"
          className="book-list-add-button"
          onClick={handleAddBook}
        >
          Add New Book
        </button>
      </div>

      {books.length === 0 ? (
        <p className="book-list-empty" role="status">
          No books available.
        </p>
      ) : (
        <ul className="book-list-items">
          {books.map((book) => (
            <li key={book.id} className="book-list-item">
              <BookCard
                title={book.title}
                description={book.description}
                imageUrl={book.imageUrl}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

import React from "react";
import { BookList } from "./components/BookList/BookList.jsx";
import { initialBooks } from "./mock/books.js";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Library</h1>
        <p className="app-subtitle">
          A React application that displays a list of books using a reusable
          component. It includes features like toggling descriptions, handling
          missing/broken images, adding new books dynamically, and accessibility
          support. The app uses mock data and has unit tests included.
        </p>
      </header>

      <BookList initialBooks={initialBooks} />
    </main>
  );
}

export default App;

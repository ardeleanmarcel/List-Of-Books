export const initialBooks = [
  {
    id: 1,
    title: "Clean Code",
    description:
      "A handbook of agile software craftsmanship by Robert C. Martin.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    description:
      "Journey to mastery for modern software engineers. This book does not have an imageUrl.",
    // a book without an imageUrl
  },
  {
    id: 3,
    title: "Wrong Image Example",
    description: "This book uses a wrong image URL to test error handling.",
    imageUrl: "https://example.com/wrong-image.jpg",
    // a book with wrong image url
  },
  {
    id: 4,
    title: "No description example",
    // a book without description and without imageUrl
  },
];

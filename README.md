# 📚 List of Books

A modern, accessible React application for displaying and managing a collection of books. Built with React 19, Vite, and Vitest for a fast, type-safe development experience.

## ✨ Features

- **Dynamic Book List**: Display books with titles, descriptions, and cover images
- **Add New Books**: Easily add new books to your collection with a single click
- **Smart Image Handling**:
  - Automatic placeholder images when no cover is provided
  - Error handling for broken image URLs
  - Accessible alt text for all images
- **Interactive UI**:
  - Toggle description visibility for cleaner browsing
  - Responsive design that works on all devices
  - Smooth transitions and hover effects
- **Accessibility First**:
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader friendly
- **Comprehensive Testing**: Test coverage with Vitest and React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ardeleanmarcel/List-Of-Books.git
cd List-Of-Books/book-list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:run` - Run tests once (CI mode)
- `npm run lint` - Lint code with ESLint

## 🏗️ Project Structure

```
List-Of-Books/
├── book-list/                    # Main application directory
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookCard/
│   │   │   │   ├── BookCard.jsx      # Individual book card component
│   │   │   │   └── styles.css        # BookCard-specific styles
│   │   │   ├── BookList/
│   │   │   │   ├── BookList.jsx      # Book list container component
│   │   │   │   └── styles.css        # BookList-specific styles
│   │   │   └── __tests__/
│   │   │       ├── BookCard.test.jsx # BookCard component tests
│   │   │       └── BookList.test.jsx # BookList component tests
│   │   ├── mock/
│   │   │   └── books.js              # Mock book data for development
│   │   ├── App.jsx                   # Main application component
│   │   ├── App.css                   # Global application styles
│   │   ├── index.css                 # Root styles and CSS variables
│   │   ├── main.jsx                  # Application entry point
│   │   └── testSetup.js              # Vitest test configuration
│   ├── public/                       # Static assets
│   ├── index.html                    # HTML template
│   ├── vite.config.js               # Vite build configuration
│   ├── eslint.config.js             # ESLint code quality rules
│   └── package.json                 # Project dependencies and scripts
└── README.md                         # Project documentation
```

````

## 🧩 Components

### BookList

Main container component that manages the book collection state.

**Props:**

- `initialBooks` (array, optional): Initial array of book objects

**Features:**

- Displays list of books or empty state
- "Add New Book" functionality
- Automatic ID generation for new books

### BookCard

Individual book display component with image, title, and description.

**Props:**

- `title` (string, required): Book title
- `description` (string, optional): Book description
- `imageUrl` (string, optional): Book cover image URL

**Features:**

- Placeholder image for missing/broken images
- Toggle description visibility
- Error handling for failed image loads
- Fully accessible with ARIA attributes

## 🎨 Styling

The application uses vanilla CSS with a modern design system:

- Clean, minimalist interface
- Responsive grid layout
- Smooth transitions and hover effects
- Light color scheme with indigo accents
- Mobile-first responsive design

## 🧪 Testing

The project includes comprehensive test coverage using:

- **Vitest**: Fast unit test framework
- **React Testing Library**: Component testing utilities
- **jsdom**: DOM environment for tests

Run tests:

```bash
npm test              # Watch mode
npm run test:ui       # Interactive UI
npm run test:run      # Single run
````

**Test Coverage:**

- ✅ Component rendering
- ✅ User interactions
- ✅ State management
- ✅ Error handling
- ✅ Accessibility features

## 🛠️ Technologies

- **React 19.2.0** - Modern UI library
- **Vite 7.2.5** (Rolldown) - Lightning-fast build tool
- **Vitest 4.0.13** - Unit testing framework
- **React Testing Library 16.3.0** - Component testing
- **ESLint** - Code linting and quality

## 📝 Book Data Structure

```javascript
{
  id: 1,                    // Unique identifier
  title: "Book Title",      // Required
  description: "...",       // Optional
  imageUrl: "https://..."   // Optional
}
```

## 🔧 Configuration

### Vite Configuration

The project uses Rolldown-powered Vite for faster builds. Configuration is in `vite.config.js`.

### ESLint

ESLint is configured with React-specific rules. See `eslint.config.js` for details.

import { useState } from "react";
import "./styles.css";

const PLACEHOLDER_IMAGE =
  "https://placehold.co/192x256/e0e7ff/4f46e5?text=No+Book+Cover&font=roboto";

export function BookCard({ title, description, imageUrl }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible((prev) => !prev);
  };

  const onImageError = () => {
    setHasImageError(true);
  };

  const descriptionId = `book-description-${title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <article className="book-card">
      <div className="book-card-media">
        {imageUrl && !hasImageError && (
          <img
            src={imageUrl}
            alt={`Cover of the book "${title}"`}
            className="book-card-image"
            onError={onImageError}
          />
        )}
        {!imageUrl && !hasImageError && (
          <img
            src={PLACEHOLDER_IMAGE}
            alt="Placeholder cover: no image available"
            className="book-card-image book-card-image--placeholder"
          />
        )}
        {hasImageError && (
          <p className="book-card-image-error" role="status">
            Image failed to load.
          </p>
        )}
      </div>

      <div className="book-card-content">
        <h3 className="book-card-title">{title}</h3>

        {description && (
          <>
            <button
              type="button"
              onClick={toggleDescription}
              className="book-card-toggle"
              aria-expanded={isDescriptionVisible}
              aria-controls={descriptionId}
            >
              {isDescriptionVisible ? "Hide description" : "Show description"}
            </button>

            {isDescriptionVisible && (
              <p id={descriptionId} className="book-card-description">
                {description}
              </p>
            )}
          </>
        )}

        {!description && (
          <p className="book-card-description--missing" role="note">
            No description provided for this book.
          </p>
        )}
      </div>
    </article>
  );
}

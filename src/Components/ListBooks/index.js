import React from "react";
import Book from "../Book";

function ListBooks({ books }) {
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <li>
            <Book
              title={book.title}
              authors={book.authors}
              cover={book.imageLinks.smallThumbnail}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ListBooks;

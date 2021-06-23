import React from "react";
import Book from "../Book";

function ListBooks({ books, bookShelfChanged }) {
  //console.log(`Books in listBooks: ${books.map((book) => book.shelf)}`);
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <Book
              bookShelfChanged={bookShelfChanged}
              title={book.title}
              authors={book.authors}
              cover={book.imageLinks.smallThumbnail}
              shelf={book.shelf}
              id={book.id}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ListBooks;

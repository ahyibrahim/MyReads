import React from "react";
import Book from "../Book";
import { SHELVES } from "../../Assets/static";

function ListBooks({ books, userBooks }) {
  //console.log(`Books in listBooks: ${books.map((book) => book.shelf)}`);
  return (
    <ol className="books-grid">
      {books.map((book) => {
        const userBookRef =
          userBooks && userBooks.filter((b) => b.id === book.id);
        return (
          <li key={book.id} style={{ position: "relative" }}>
            <Book
              bookShelfChanged={book.changeShelf}
              title={book.title}
              authors={book.authors}
              cover={book && book.imageLinks && book.imageLinks.smallThumbnail}
              shelf={book.shelf}
              id={book.id}
            />
            {userBookRef && userBookRef.length ? (
              <div
                style={{
                  position: "absolute",
                  top: 30,
                  left: 0,
                  backgroundColor: "#fff",
                  padding: 5,
                  boxShadow: "10px 10px 28px 0px rgba(0,0,0,0.36)",
                  border: "1px solid rgba(0,0,0,0.36)",
                  fontWeight: "600",
                  color: "#60AC5D",
                }}
              >
                {
                  SHELVES.filter(
                    (shelf) => userBookRef[0].shelf === shelf.key
                  )[0].value
                }
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export default ListBooks;

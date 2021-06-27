import React from "react";
import { Link } from "react-router-dom";
import { SHELVES } from "../../Assets/static";
import Shelf from "../../Components/Shelf";

function MainPage({ books }) {
  //console.log(`Books in MainPage: ${books.map((book) => book.shelf)}`);

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {SHELVES.map((shelf) => (
            <Shelf
              shelfName={shelf.value}
              books={books.filter((book) => book.shelf === shelf.key)}
              key={shelf.value}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

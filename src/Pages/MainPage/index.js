import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../../Components/Shelf";

//const [stateBooks, updateBooks] = React.useState([])

function MainPage({ books, bookShelfChanged }) {
  //console.log(`Books in MainPage: ${books.map((book) => book.shelf)}`);

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            bookShelfChanged={bookShelfChanged}
            shelfName="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <Shelf
            bookShelfChanged={bookShelfChanged}
            shelfName="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Shelf
            bookShelfChanged={bookShelfChanged}
            shelfName="Read"
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

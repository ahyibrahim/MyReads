import React from "react";
import ListBooks from "../ListBooks";

function index({ shelfName, books, bookShelfChanged }) {
  //console.log(`Books in shelf: ${books.map((book) => book.shelf)}`);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ListBooks bookShelfChanged={bookShelfChanged} books={books} />
      </div>
    </div>
  );
}

export default index;

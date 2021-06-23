import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../../Components/Shelf";

function MainPage({ books }) {
  {
    console.log(`Books in MainPage: ${books}`);
  }
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf shelfName="Currently Reading" books={books} />
          <Shelf shelfName="Want to Read" books={books} />
          <Shelf shelfName="Read" books={books} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

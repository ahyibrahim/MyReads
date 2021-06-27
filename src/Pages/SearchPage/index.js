import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import * as BookAPI from "../../BooksAPI";
import ListBooks from "../../Components/ListBooks";

function SearchPage({ books, updateABook }) {
  const [queryResults, setQueryResults] = useState([]);
  const previousAbortController = useRef();

  const onTextChanged = useCallback(
    (e) => {
      const searchText = e.target.value;
      if (previousAbortController.current) {
        previousAbortController.current.abort();
      }
      const abortController = new window.AbortController();
      const { signal } = abortController;
      previousAbortController.current = abortController;
      BookAPI.search(searchText, signal)
        .then((books) => {
          console.log(books);
          try {
            return books.map((book) => {
              book.changeShelf = (newShelf) => {
                book.shelf = newShelf;
                let originalBook = book;
                delete originalBook.changeShelf;
                updateABook(book, newShelf);
              };
              return book;
            });
          } catch (err) {
            console.log("An error occured:", err);
            return [];
          }
        })
        .then((res) => res && setQueryResults(res));
    },
    [previousAbortController.current]
  );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={onTextChanged}
          />
        </div>
      </div>
      <div className="search-books-results">
        {queryResults.length ? (
          <ListBooks books={queryResults} userBooks={books} />
        ) : null}
      </div>
    </div>
  );
}

export default SearchPage;

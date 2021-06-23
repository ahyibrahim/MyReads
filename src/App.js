import React, { useState, useEffect, useCallback } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import * as BooksApi from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";

function BooksApp() {
  const [books, setBooks] = useState([]);
  const [booksInit, setBooksInit] = useState(false);

  const fetchAndUpdateBooks = useCallback(() => {
    BooksApi.getAll().then((books) => {
      console.log(`Books in api call: ${books}`);
      setBooksInState(books);
    });
  }, []);

  const updateFromSearch = useCallback((book, newShelf) => {
    BooksApi.update(book, newShelf).then(() => fetchAndUpdateBooks());
  }, []);

  const setBooksInState = useCallback((books) => {
    const booksWithShelf = books.map((book) => {
      book.changeShelf = (newShelf) => {
        book.shelf = newShelf;
        let originalBook = book;
        delete originalBook.changeShelf;
        BooksApi.update(originalBook, newShelf)
          .then(() => fetchAndUpdateBooks())
          .catch((err) => console.log(err));
        // If we want to update internally only
        // setBooks((prev) =>{
        //   const updated = prev.map((newBook) => (newBook.id === book.id ? book : newBook))
        //   return updated;
        // });
      };
      return book;
    });
    setBooks(booksWithShelf);
  }, []);

  useEffect(() => {
    fetchAndUpdateBooks();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage books={books} />} />
        <Route
          path="/search"
          render={() => <SearchPage updateABook={updateFromSearch} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default BooksApp;

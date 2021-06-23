import React, { useState, useEffect, useCallback } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import * as BooksApi from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";

function BooksApp() {
  const [books, setBooks] = useState([]);

  const setBooksInState = useCallback((books) => {
    const booksWithShelf = books.map((book) => {
      book.shelf = "currentlyReading";
      book.changeShelf = (newShelf) => {
        book.shelf = newShelf;
        setBooks((prev) =>
          prev.map((newBook) => (newBook.id === book.id ? book : newBook))
        );
      };
      return book;
    });
    setBooks(booksWithShelf);
  }, []);

  useEffect(() => {
    BooksApi.getAll().then((books) => {
      console.log(`Books in api call: ${books}`);
      setBooksInState(books);
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage books={books} />} />
        <Route path="/search" render={() => <SearchPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default BooksApp;

import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import * as BooksApi from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      console.log(`Books in api call: ${books}`);
      this.setBooksInState(books);
    });
  }

  setBooksInState(books) {
    console.log(books);
    books = books.map((book) => {
      book.shelf = "currentlyReading";
      return book;
    });

    this.setState((currentState) => ({
      books: books,
    }));
  }

  bookChangedShelf(bookId, oldShelf, newShelf) {
    console.log(`State in bookChanged Shelf: ${this.state}`);
    const changedBook = this.state.books.find((book) => book.id === bookId);
    changedBook.shelf = newShelf;
    this.setState((currentState) => ({
      books: currentState.books.filter((book) => {
        return book.id !== bookId;
      }),
    }));
    this.setState((currentState) => ({
      books: [...currentState.books, changedBook],
    }));
  }

  render() {
    console.log(`Books in app.js:  ${this.state.books}`);

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                books={this.state.books}
                bookShelfChanged={this.bookChangedShelf}
              />
            )}
          />
          <Route path="/search" render={() => <SearchPage />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;

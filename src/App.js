import React from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import * as BooksApi from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";

class BooksApp extends React.Component {
  componentDidMount() {
    BooksApi.getAll().then((books) => {
      console.log(`Books in api call: ${books}`);
      this.setBooksInState(books);
    });
  }

  setBooksInState(books) {
    this.setState((curretState) => ({
      books: books,
    }));
  }

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

  render() {
    {
      console.log(`Books in app.js:  ${this.state.books}`);
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage books={this.state.books} />}
          />
          <Route path="/search" render={() => <SearchPage />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;

import React from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import * as BooksApi from "./BooksAPI";
import Book from "./Components/Book";

class BooksApp extends React.Component {
  componentDidMount() {
    BooksApi.getAll().then((books) => console.log(books));
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route>
      //       <div></div>
      //     </Route>
      //   </Switch>
      // </Router>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Link to="/Second">Go to Second Route</Link>}
          />
          <Route
            path="/Second"
            render={() => <Link to="/">Go to First Route</Link>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;

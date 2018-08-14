import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./shared/Header";
import RentalListing from "./components/rental/rentallisting/RentalListing";
import Rentaldetail from "./components/rental/rentaldetail/Rentaldetail";
import { init } from "./reducers/index";

import "./App.css";

const store = init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" component={RentalListing} />
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={Rentaldetail} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

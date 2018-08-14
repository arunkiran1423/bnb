import React, { Component } from "react";
import Rentalcard from "./Rentalcard";

export class Rentallist extends Component {
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return <Rentalcard key={index} rental={rental} />;
    });
  }

  render() {
    return <div className="row">{this.renderRentals()}</div>;
  }
}

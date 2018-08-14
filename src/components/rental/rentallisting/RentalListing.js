import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import { Rentallist } from "./Rentallist";

class RentalListing extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <div>
        <section id="rentalListing">
          <h1 className="page-title">Your Home All Around the World</h1>
          <Rentallist rentals={this.props.rentals} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalListing);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

class Rentaldetail extends Component {
  componentWillMount() {
    //dispatch action
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    return (
      <div>
        <h1>{rental.title}</h1>
        <h1>{rental.city}</h1>
        <h1>{rental.description}</h1>
        <h1>{rental.dailyRate}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(Rentaldetail);

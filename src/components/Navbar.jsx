import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Number of Items:{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </span>
        <span className="navbar-brand mb-0 h1">
          Total Quantity:{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.sumOfCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;

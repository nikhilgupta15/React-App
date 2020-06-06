import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container m-2">
        <div className="row">
          <div className="col-sm-6">
            {this.props.children}
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counters)}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counters.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
          <div className="col-lg-6">
            <table>
              <tbody>
                <tr>
                  <th>
                    No. of {this.props.counters.name} selected:{" "}
                    {this.props.counters.value}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    if (this.props.counters.value === 0) classes = classes + "warning";
    else classes = classes + "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

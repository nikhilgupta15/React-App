import React, { Component } from "react";
import Counter from "./CounterComponents";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>

        <button
          onClick={this.props.onAdd}
          className="btn btn-success btn-lg m-2"
        >
          Add
        </button>

        <input
          className="form-control"
          type="text"
          placeholder="Enter the item name"
          id="item"
          onClick={this.props.onInput}
          style={{ margin: 10 }}
        ></input>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counters={counter}
          >
            <h4>{counter.name}</h4>
          </Counter>
        ))}

        <button
          type="button"
          className="btn btn-success btn-lg m-2"
          onClick={this.props.onCheckOut}
          id="check"
          style={{ visibility: "hidden" }}
        >
          Check Out
        </button>
        <div className="container">
          <table
            class="table"
            id="display"
            style={{ display: "none", marginLeft: 0, marginTop: 10 }}
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody id="body"></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Counters;
